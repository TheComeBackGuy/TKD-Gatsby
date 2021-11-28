import './styles/currentSeason.css'
import './styles/index.css'

import * as React from 'react'

import Footer from '../components/footer'
import { GatsbyImage } from 'gatsby-plugin-image'
import Header from '../components/header'
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import thisSeason from '../content/thisYear.json'
import { useState } from 'react'

// import JSONData from '../content/thisYear.json'

// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
/**the query just looks for jpgs in the shows folder
 * that will be where all promo/posters will be for shows
 */
export const showImageSearch = graphql`
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
                        gatsbyImageData(placeholder: DOMINANT_COLOR)
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
/**overall function */
export default function CurrentSeason({ data }) {
    /**just to check/be sure I'm grabbing the right paths */
    // console.log(data.allFile.edges.map((item) => item.node.name))

    /**set variable for the mapping */
    const imageData = data.allFile.edges
    console.log(data.allFile.edges)

    /**checks image against the imput and returns the fluid data if it matches */
    // const findImage = imageData.find((imageName) => {
    //     return imageName == data.allFile.edges.node.name
    // })

    // function findImage(showImage) {
    //     const path = imageData.find((imageName) => {
    //         return imageName.node.name == showImage
    //     })
    //     console.log(path)
    // }

    // function findImage(showImage) {
    //     imageData.map((image) => {
    //         console.log(image.node.name + ' vs ' + showImage)
    //         if (image.node.name == showImage) {
    //             /**if the image name == our show image name, we return that image data */
    //             return data.file.childImageSharp.gatsbyImageData
    //         }
    //     })
    //     return
    // }

    /**Are we displaying all shows to the user? Default is false */
    const [allShows, setAllShows] = useState(false)

    /**we're putting either all the shows or the remaining season's shows here */
    const displayShows = []

    /**today's date */
    const today = new Date()

    /**check to see what day it is and what shows are left in the season */
    function inThePast(date) {
        const compare = new Date(date)
        if (today.getTime() >= compare.getTime()) return true
    }

    /**button and header for remaing shows/whole season */
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

    /**this is where we display the shows, depending on what the user whants to see */
    thisSeason.forEach((show) => {
        const closing = new Date(show.closes)
        /**comparing the show closing dates from the JSON file  */
        if (!allShows && !inThePast(closing)) {
            /**if the show hasn't closed, it's added to a list */
            displayShows.push(show)
        } else if (allShows === true) {
            /**if we're showing all shows, just them all into the array to show them all. */
            displayShows.push(show)
        }
    })

    /**Month detector so we can display the date for the shows */
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

    /**Detects if the entry is an array */
    function dataList(category) {
        //If it's not, it just returns the single entry
        if (!Array.isArray(category)) {
            return category
            //if it's just 2 items, it puts the apersand between them
        } else if (category.length === 2) {
            return category.join(' & ')
            //if it's more than 2 items, it adds commas and the apersand
        } else if (category.length >= 3) {
            let middleItems = ''
            let firstItem = category[0]
            for (let i = 1; i < category.length - 1; i++) {
                //everything but the last item in the list gets a comma
                middleItems += ', ' + category[i]
            }
            //The last item gets a comma and ampersand
            let lastItem = ', & ' + category[category.length - 1]
            //combines items into a readable list
            return firstItem + middleItems + lastItem
        }
    }

    /**If the event has passed, it doesn't render a Buy Ticket button */
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

    /**Main return */
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
                        {displayShows.map((show, index) => {
                            return (
                                /** showItem is the main containter for the production  */
                                <li
                                    key={`content_item_${index}`}
                                    className="showContainer"
                                >
                                    <div className="placeholder">
                                        {/*I want to be able to compare the JSON variable 
                                        with the data.name result in the query. 
                                        If they match, use the fluid */}
                                        {console.log(
                                            'this item was ' + show.title
                                        )}
                                        {/* //*still not working */}
                                        {/* <GatsbyImage
                                            image={getImage(
                                                findImage(show.image)
                                            )}
                                            alt={show.title}
                                        /> */}
                                        <GatsbyImage
                                            image={getImage(
                                                data.file.childImageSharp
                                                    .gatsbyImageData
                                            )}
                                            alt={show.title}
                                        />

                                        {/* <img
                                            src="../images/shows/doublewide.jpg"
                                            alt={show.title}
                                        /> */}
                                    </div>
                                    <div className="showDetails">
                                        <h3>{show.title}</h3>
                                        <p>
                                            <cite>
                                                By: {dataList(show.author)}
                                            </cite>
                                            <br />
                                            {parseDate(show.opens)} -{' '}
                                            {parseDate(show.closes)}
                                            <br />
                                            <strong className="director">
                                                Directed By:{' '}
                                            </strong>
                                            <br />
                                            {dataList(show.director)}
                                        </p>
                                    </div>
                                    {checkTicketButton(
                                        show.closes,
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
