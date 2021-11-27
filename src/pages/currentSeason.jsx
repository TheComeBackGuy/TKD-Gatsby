import './styles/currentSeason.css'
import './styles/index.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import { graphql } from 'gatsby'
import thisSeason from '../content/thisYear.json'
import { useState } from 'react'

// import JSONData from '../content/thisYear.json'

// import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// export const query = graphql`
//     query myQuery {
//         allImageSharp {
//             edges {
//                 node {
//                     id
//                     gatsbyImageData
//                 }
//             }
//         }
//     }
// `

export default function CurrentSeason({ data }) {
    /**Are we displaying all shows? Default is false */
    const [allShows, setAllShows] = useState(false)
    // const allShows = false
    // const today = new Date()

    const displayShows = []
    // console.log('data is ' + props.data)

    /***compare today with end date of all shows. whichever show is the first to pass the test, use it's image as the header.*/
    // use the variable to search a query
    /**Use it's link as the link */
    const today = new Date()

    function inThePast(date) {
        const compare = new Date(date)
        if (today.getTime() >= compare.getTime()) return true
    }

    function headerDisplay() {
        if (allShows) {
            return (
                <div>
                    <h1>Productions This Season</h1>
                    <button
                        className="seasonButton"
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
                    <h1>Upcoming Productions</h1>
                    <button
                        className="seasonButton"
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

    thisSeason.map((show) => {
        const closing = new Date(show.closes)
        // console.log(closing + ' entry')
        /**comparing the show closing dates from the JSON file  */
        if (!allShows && !inThePast(closing)) {
            // console.log(show.title + ' ends on ' + show.closes)
            /**if the show hasn't closed, it's added to a list */
            displayShows.push(show)
        } else if (allShows === true) {
            displayShows.push(show)
        }
    })
    // console.log(upcomingShowImages[0])

    function parseDate(date) {
        const thisDate = new Date(date)
        let month = thisDate.getMonth() + 1
        const day = thisDate.getDate()

        switch (month) {
            case 1:
                month = 'January'
                break
            case 2:
                month = 'February'
                break
            case 3:
                month = 'March'
                break
            case 4:
                month = 'April'
                break
            case 5:
                month = 'May'
                break
            case 6:
                month = 'June'
                break
            case 7:
                month = 'July'
                break
            case 8:
                month = 'August'
                break
            case 9:
                month = 'September'
                break
            case 10:
                month = 'October'
                break
            case 11:
                month = 'November'
                break
            case 12:
                month = 'December'
                break
            default:
                break
        }
        // let slicedMonth = month.slice(3)
        // console.log(month)
        return `${month.toString().slice(0, 3)} ${day}`
    }

    function dataList(category) {
        if (!Array.isArray(category)) {
            return category
        } else if (category.length === 2) {
            return category.join(' & ')
        } else if (category.length >= 3) {
            let middleItems = ''
            let firstItem = category[0]
            for (let i = 1; i < category.length - 1; i++) {
                middleItems += ', ' + category[i]
            }
            let lastItem = ', & ' + category[category.length - 1]

            return firstItem + middleItems + lastItem
        }
    }

    function checkTicketButton(check, link) {
        if (!inThePast(check)) {
            return (
                <button
                    className="showTicket"
                    onClick={() => {
                        window.open(
                            `https://www.onthestage.tickets/show/theatre-knoxville-downtown/${link}/tickets`
                        )
                    }}
                >
                    Tickets
                </button>
            )
        }
        return
    }

    return (
        <div className="everything">
            <header>
                <Header text="This is the header" />
            </header>

            <main className="container">
                <h1 className="standardPage">OUR SEASON</h1>
                <div className="card">
                    {headerDisplay()}

                    <ul className="showList">
                        {displayShows.map((data, index) => {
                            return (
                                /** showItem is the main containter for the production  */
                                <li
                                    key={`content_item_${index}`}
                                    className="showContainer"
                                >
                                    <div className="placeholder">
                                        <p>Image goes here</p>
                                    </div>
                                    <div className="showDetails">
                                        <h3>{data.title}</h3>
                                        <p>
                                            <cite>
                                                By: {dataList(data.author)}
                                            </cite>
                                            <br />
                                            {parseDate(data.opens)} -{' '}
                                            {parseDate(data.closes)}
                                            <br />
                                            <strong className="director">
                                                Directed By:{' '}
                                            </strong>
                                            <br />
                                            {dataList(data.director)}
                                        </p>
                                    </div>
                                    {checkTicketButton(
                                        data.closes,
                                        data.ticketLink
                                    )}
                                    {/* <button
                                        className="showTicket"
                                        onClick={() => {
                                            window.open(
                                                `https://www.onthestage.tickets/show/theatre-knoxville-downtown/${data.ticketLink}/tickets`
                                            )
                                        }}
                                    >
                                        Tickets
                                    </button> */}
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
