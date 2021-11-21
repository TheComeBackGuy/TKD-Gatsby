import * as React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import JSONData from '../content/thisYear.json'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './styles/currentSeason.css'
import './styles/pages.css'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
    query photoThumbs {
        HillHouseImage: file(relativePath: { eq: "HillHouse_thumb.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default function CurrentSeason({ imageData }) {
    const allShows = false
    const today = new Date()

    const isInFuture = (today, someOtherDay) => {
        if (today.getTime() > someOtherDay.getTime()) {
            return true
        }
        return false
    }

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

    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            {/* <Img
                fluid={imageData.HillHouseImage.childImageSharp.fluid}
                alt="It's HIll House"
            /> */}
            {/* <ul>
                {JSONData.content.map((data, index) => {
                    return <li key={`content_item_${index}`}>{data.item}</li>
                })}
            </ul> */}
            <main className="container">
                <h1 className="standardPage">OUR SEASON</h1>
                <div className="card">
                    <p>All Shows/Upcoming Shows</p>
                    {/* <h1>{JSONData[0].title}</h1> */}
                    <ul className="showList">
                        {JSONData.map((data, index) => {
                            const showDate = new Date(data.opens)

                            if (!allShows && today) {
                                // console.log(today, showDate)
                                return (
                                    /** showItem is the main containter for the production  */
                                    <li
                                        key={`content_item_${index}`}
                                        className="showContainer"
                                    >
                                        <div>
                                            <div className="placeholder">
                                                <p>Image goes here</p>
                                            </div>
                                            <div className="showDetails">
                                                <h3>{data.title}</h3>
                                                <p>
                                                    <cite>
                                                        By:{' '}
                                                        {dataList(data.author)}
                                                    </cite>
                                                    <br />
                                                    {parseDate(
                                                        data.opens
                                                    )} -{' '}
                                                    {parseDate(data.closes)}
                                                    <br />
                                                    <strong className="director">
                                                        Directed By:{' '}
                                                    </strong>
                                                    <br />
                                                    {dataList(data.director)}
                                                </p>
                                            </div>
                                            <button
                                                className="showTicket"
                                                onClick={() => {
                                                    window.open(
                                                        `https://www.onthestage.tickets/show/theatre-knoxville-downtown/${data.ticketLink}/tickets`
                                                    )
                                                }}
                                            >
                                                Tickets
                                            </button>
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <Footer />
            </main>
        </body>
    )
}
