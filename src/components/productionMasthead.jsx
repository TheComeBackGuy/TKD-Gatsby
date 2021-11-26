import './styles/productionMasthead.css'

import * as React from 'react'

import { GatsbyImage, getImage } from 'gatsby-image'

import BuyTickets from './buyTickets'
import { graphql } from 'gatsby'
import thisSeason from '../content/thisYear.json'

// import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
    query myQuery {
        doublewide: file(name: { eq: "doublewide" }) {
            id
            childImageSharp {
                gatsbyImageData
            }
        }
        officeHours: file(name: { eq: "officeHours" }) {
            id
            childImageSharp {
                gatsbyImageData
            }
        }
        iHateHamlet: file(name: { eq: "iHateHamlet" }) {
            id
            childImageSharp {
                gatsbyImageData
            }
        }
        rope: file(name: { eq: "rope" }) {
            id
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`

export default function ProductionMasthead(props) {
    const upcomingShowImages = []
    const today = new Date()
    console.log('data is ' + props.data)

    const currentShow = () => {
        /***compare today with end date of all shows. whichever show is the first to pass the test, use it's image as the header.*/
        // use the variable to search a query
        /**Use it's link as the link */

        thisSeason.map((show) => {
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
        <div className="mastheadContainer">
            <button className="showStatus">{props.status.toUpperCase()}</button>
            {/* <GatsbyImage image={getImage(data)} alt="current Show" /> */}

            <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
        </div>
    )
}
