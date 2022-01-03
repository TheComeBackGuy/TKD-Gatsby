import '../pages/styles/index.css'
import './production.css'

import * as React from 'react'

import DataList from '../components/DataList'
import Footer from '../components/footer'
import Header from '../components/header'
import ParseDate from '../components/ParseDate'

export default function Production({ pageContext }) {
    console.log(pageContext.cast)
    console.log(pageContext.director)
    console.log(pageContext.author)

    // function showActors(show) {
    //     var actors = show.cast.actor != ''
    // }

    return (
        <div className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <img
                    src={`/shows/${pageContext.image}.jpg`}
                    alt={pageContext.title}
                    className="topElement detailImg"
                    width="100%"
                />
                <div className="card details">
                    <h3 className="author">
                        By: {DataList(pageContext.author)}
                    </h3>
                    <h4 className="director">
                        Directed by {DataList(pageContext.director)}
                    </h4>
                    <h4 className="date">
                        {ParseDate(pageContext.opens)} -{' '}
                        {ParseDate(pageContext.closes)},{' '}
                        {new Date(pageContext.closes).getFullYear()}
                    </h4>
                    <div className="split">
                        <div
                            className="description"
                            dangerouslySetInnerHTML={{
                                __html: pageContext.description,
                            }}
                        />
                        <ul>
                            {pageContext.cast.map((actor) => {
                                return (
                                    <li>
                                        <b>{actor.name}</b>: {actor.actor}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}
