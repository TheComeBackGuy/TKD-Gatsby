import './styles/productionMasthead.css'

import * as React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import BuyTickets from './buyTickets'
import FindImage from './FindImage'
import InThePast from './InThePast'
import { graphql } from 'gatsby'
import thisSeason from '../content/thisYear.json'

// import showImageSearch from '../pages/currentSeason'

export const bannerSearch = graphql`
    {
        allFile(filter: { relativeDirectory: { eq: "shows" } }) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        fluid(maxWidth: 200, cropFocus: CENTER) {
                            base64
                            originalImg
                            originalName
                        }
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
        file(relativePath: {}, relativeDirectory: { eq: "shows" }) {
            name
            id
            publicURL
            relativePath
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`
// import CurrentSeason from '../pages/currentSeason'

export default function ProductionMasthead({ data }) {
    const upcomingShowImages = []
    // const imageData = data.allFile.edges
    // const imageData = showImageSearch
    console.log(data)

    /**We want to find the first image who's closing date isn't in the future */
    function banner() {
        const show = thisSeason.find((show) => !InThePast(show.closes))
        console.log(show.title + ' closes on ' + show.closes)
        // console.log(FindImage(imageData, show.image))
        // return FindImage(imageData, show.image)
    }

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

    function showStatus() {}

    currentShow()
    return (
        <div className="mastheadContainer">
            <button className="showStatus">Banner</button>
            {/* <GatsbyImage image={getImage(data)} alt="current Show" /> */}

            <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
        </div>
    )
}
