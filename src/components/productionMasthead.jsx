import './styles/ProductionMasthead.css'
import '../pages/styles/index.css'

import * as React from 'react'

import { setState, useState } from 'react'

import BuyTickets from './buyTickets'
import InThePast from './InThePast'
import Seasons from '../content/seasons.json'

// import MainQuery from '../components/MainQuery'

/**the query just looks for jpgs in the shows folder
 * that will be where all promo/posters will be for shows
 */

export default function ProductionMasthead() {
    /**We want to find the first image who's closing date isn't in the future */
    const show = Seasons[0].shows.find((show) => !InThePast(show.closes))
    const showStatus = InThePast(show.opens)
        ? 'NOW SHOWING'
        : 'IN PRE PRODUCTION'
    console.log(`/images/shows/${show.image}.jpg`)
    return (
        <div className="mastheadContainer topElement">
            <button className="showStatus">{showStatus}</button>
            <img src={`shows/${show.image}.jpg`} alt={show.image} />

            {/* {banner()} */}
            <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
        </div>
    )
}
