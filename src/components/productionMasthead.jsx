import './styles/productionMasthead.css'

import * as React from 'react'

import BuyTickets from './buyTickets'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import thisSeason from '../content/thisYear.json'

// import showImageSearch from '../pages/currentSeason'
export const BannerTest = graphql`
    query bannerQuery {
        allJson {
            edges {
                node {
                    id
                }
            }
        }
    }
`

// import CurrentSeason from '../pages/currentSeason'
export default function ProductionMasthead({ data }) {
    console.log('Masthead Data is ')
    console.log(data)
    const upcomingShowImages = []
    // const imageData = data.allFile.edges
    // const imageData = showImageSearch

    /**We want to find the first image who's closing date isn't in the future */
    // function banner() {
    //     const show = thisSeason.find((show) => !InThePast(show.closes))
    //     console.log(show.title + ' closes on ' + show.closes)
    //     // console.log(FindImage(imageData, show.image))
    //     // return FindImage(imageData, show.image)
    // }

    const currentShow = () => {
        /***compare today with end date of all shows. whichever show is the first to pass the test, use it's image as the header.*/
        // use the variable to search a query
        /**Use it's link as the link */

        thisSeason.forEach((show) => {
            const today = new Date()
            const closing = new Date(show.closes)
            // console.log(closing + ' entry')
            /**comparing the show closing dates from the JSON file  */
            if (today.getTime() <= closing.getTime()) {
                // console.log(show.title + ' ends on ' + show.closes)
                /**if the show hasn't closed, it's added to a list */
                upcomingShowImages.push(show.image)
            }
        })
        // console.log(upcomingShowImages[0])
    }

    currentShow()
    return (
        <div className="mastheadContainer topElement">
            <button className="showStatus">Banner</button>

            <GatsbyImage image={getImage()} alt="current Show" />

            <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
        </div>
    )
}
