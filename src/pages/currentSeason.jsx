import * as React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import JSONData from '../content/thisYear.json'
import './styles/currentSeason.css'
import './styles/pages.css'
import { graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

// export const query = graphql``
export default function CurrentSeason() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            {/* <ul>
                {JSONData.content.map((data, index) => {
                    return <li key={`content_item_${index}`}>{data.item}</li>
                })}
            </ul> */}
            <main className="container">
                <h1 className="standardPage">2021/22 SEASON</h1>
                <div className="card">
                    {/* <h1>{JSONData[0].title}</h1> */}
                    <ul>
                        {JSONData.map((data, index) => {
                            return (
                                <li key={`content_item_${index}`}>
                                    <div className="knockoutWhite">
                                        <h3>{data.title}</h3>
                                        <p>
                                            <cite>By: {data.author}</cite>
                                            <br />
                                            Opens: {data.opens}
                                            <br />
                                            Closes: {data.closes}
                                            <br />
                                            Directed By: {data.director}
                                        </p>
                                        <button
                                            className="tickets"
                                            onClick={() => {
                                                window.open(
                                                    `https://www.onthestage.tickets/show/theatre-knoxville-downtown/${data.ticketLink}/tickets`
                                                )
                                            }}
                                        >
                                            Tickets
                                        </button>
                                        <ul>
                                            {data.cast.map((role) => {
                                                if (role.actor !== '') {
                                                    return (
                                                        <li>
                                                            {' '}
                                                            <strong>
                                                                {' '}
                                                                {role.name}
                                                            </strong>
                                                            : {role.actor}
                                                        </li>
                                                    )
                                                } else {
                                                    return <li>{role.name}</li>
                                                }
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Footer />
            </main>
        </body>
    )
}
