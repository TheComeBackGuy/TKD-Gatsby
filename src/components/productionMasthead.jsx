import './styles/productionMasthead.css'
import '../pages/styles/index.css'

import * as React from 'react'

import BuyTickets from './buyTickets'
import InThePast from './InThePast'
import Seasons from '../content/seasons.json'

export default function ProductionMasthead() {
    /**We want to find the first image who's closing date isn't in the future */
    const show = Seasons[0].shows.find((show) => !InThePast(show.closes))
    const showStatus = InThePast(show.opens)
        ? 'NOW SHOWING'
        : 'IN PRE PRODUCTION'
    console.log(`/images/shows/${show.image}.jpg`)
    return (
        <div className="mastheadContainer topElement">
            <BuyTickets
                url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets"
                status={showStatus}
            />

            <img
                src={`shows/${show.image}.jpg`}
                alt={show.image}
                width="100%"
            />

            {/* <button className="showStatus">{showStatus}</button> */}
        </div>
    )
}
