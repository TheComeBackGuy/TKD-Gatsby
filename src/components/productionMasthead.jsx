import './styles/productionMasthead.css'

import * as React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import BuyTickets from './buyTickets'
import thisSeason from '../content/thisYear.json'

export default function ProductionMasthead(props) {
    const upcomingShowImages = []
    const today = new Date()

    const currentShow = () => {
        /***compare today with end date of all shows. whichever show is the first to pass the test, use it's image as the header.*/
        // use the variable to search a query
        /**Use it's link as the link */

        thisSeason.map((show) => {
            const closing = new Date(show.closes)
            console.log(closing + ' entry')
            /**comparing the show closing dates from the JSON file  */
            if (today.getTime() <= closing.getTime()) {
                console.log(show.title + ' ends on ' + show.closes)
                /**if the show hasn't closed, it's added to a list */
                upcomingShowImages.push(show.image)
            }
        })
        console.log(upcomingShowImages[0])
    }

    currentShow()
    return (
        <div className="mastheadContainer">
            <button className="showStatus">{props.status.toUpperCase()}</button>
            <GatsbyImage
                image="../images/shows/doublewide.jpg"
                alt="current Show"
            />

            <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
        </div>
    )
}
