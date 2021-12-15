import './styles/currentSeason.css'
import './styles/index.css'
import '../components/styles/Nav.css'

import * as React from 'react'

import DataList from '../components/DataList'
import Footer from '../components/footer'
import Header from '../components/header'
import InThePast from '../components/InThePast'
import { Link } from 'gatsby'
import ParseDate from '../components/ParseDate'
import thisSeason from '../content/seasons.json'
import { useState } from 'react'

// import MainQuery from '../components/MainQuery'

/**overall function */
export default function CurrentSeason() {
    /**Are we displaying all shows to the user? Default is false */
    const [allShows, setAllShows] = useState(false)

    /**we're putting either all the shows or the remaining season's shows here */
    const displayShows = []

    /**button and header for remaing shows/whole season */
    function headerDisplay() {
        if (allShows) {
            return (
                <div>
                    <h1 className="pageHeader">Productions This Season</h1>
                    <button
                        className="mainButton"
                        onClick={() => {
                            setAllShows(!allShows)
                        }}
                    >
                        Show Upcoming Productions
                    </button>
                </div>
            )
        } else if (!allShows) {
            return (
                <div>
                    <h1 className="pageHeader">Upcoming Productions</h1>
                    <button
                        className="mainButton"
                        onClick={() => {
                            setAllShows(!allShows)
                        }}
                    >
                        Show All Productions For This Season
                    </button>
                </div>
            )
        }
    }

    /**this is where we display the shows, depending on what the user whants to see */
    thisSeason[0].shows.forEach((show) => {
        const closing = new Date(show.closes)
        /**comparing the show closing dates from the JSON file  */
        if (!allShows && !InThePast(closing)) {
            /**if the show hasn't closed, it's added to a list */
            displayShows.push(show)
        } else if (allShows === true) {
            /**if we're showing all shows, just them all into the array to show them all. */
            displayShows.push(show)
        }
    })

    /**If the event has passed, it doesn't render a Buy Ticket button */
    function checkTicketButton(check, link) {
        if (!InThePast(check)) {
            return (
                <button
                    className="showTicket"
                    onClick={() => {
                        window.open(
                            `https://www.onthestage.tickets/show/theatre-knoxville-downtown/${link}/tickets`
                        )
                    }}
                >
                    Get Tickets
                </button>
            )
        }
        return
    }

    /**Main return */
    return (
        <div className="everything">
            <header>
                <Header text="This is the header" />
            </header>

            <main className="container">
                <h1 className="standardPage topElement">OUR SEASON</h1>
                <div className="card">
                    {headerDisplay()}

                    <ul className="showList">
                        {displayShows.map((show, index) => {
                            return (
                                /** showItem is the main containter for the production  */
                                <li
                                    key={`content_item_${index}`}
                                    className="showContainer"
                                >
                                    <div className="placeholder">
                                        <Link
                                            to={`/production/${new Date(
                                                show.opens
                                            ).getFullYear()}/${show.slug}/`}
                                        >
                                            <img
                                                src={`/shows/thumbs/${show.image}.jpg`}
                                                alt={show.title}
                                                className="thumb"
                                            />
                                        </Link>
                                    </div>
                                    <div className="showDetails">
                                        <h3>{show.title}</h3>
                                        <p>
                                            <cite>
                                                By: {DataList(show.author)}
                                            </cite>
                                            <br />
                                            {ParseDate(show.opens)} -{' '}
                                            {ParseDate(show.closes)}
                                            <br />
                                            <h3 className="director">
                                                Directed By:
                                            </h3>
                                            {DataList(show.director)}
                                        </p>
                                    </div>
                                    {checkTicketButton(
                                        show.closes,
                                        show.ticketLink
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Footer />
            </main>
        </div>
    )
}
