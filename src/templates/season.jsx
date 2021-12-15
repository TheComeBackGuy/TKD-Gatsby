import '../pages/styles/index.css'
import '../pages/styles/season.css'

import * as React from 'react'

import Archive from '../content/seasons.json'
import DataList from '../components/DataList'
import Footer from '../components/footer'
import Header from '../components/header'
import { Helmet } from 'react-helmet'
import InThePast from '../components/InThePast'
import MakeCastList from '../components/MakeCastList'
import ParseDate from '../components/ParseDate'
import { navigate } from 'gatsby'

export default function SeasonList({ pageContext }) {
    console.log(Archive.length)
    console.log(pageContext)
    const currentIndex = Archive.findIndex(
        (item) => item.start === pageContext.start
    )
    console.log(currentIndex)

    // Archive.forEach((season) => {
    //     if (pageContext.start === season.start) {
    //         console.log(Archive.indexOf(season.start))
    //     }
    // })

    /***I want to match the page start year with pageContext start year
     * and use the JSON length of that match to figure out whether to render the arrow buttons
     */

    function showArrow(direction) {
        if (direction === 'back' && currentIndex < Archive.length - 1) {
            return (
                <button
                    className="mainButton arrow"
                    onClick={() => {
                        navigate(
                            `../${pageContext.start - 1}-${
                                pageContext.end - 1
                            }/`
                        )
                    }}
                >
                    ◄
                </button>
            )
        } else if (direction === 'forward' && currentIndex > 0) {
            return (
                <button
                    className="mainButton  arrow"
                    onClick={() => {
                        navigate(
                            `../${pageContext.start + 1}-${
                                pageContext.end + 1
                            }/`
                        )
                    }}
                >
                    ►
                </button>
            )
        } else if (direction === 'forward' && currentIndex <= 0) {
            return (
                <button className="mainButton arrow" disabled="disabled">
                    ►
                </button>
            )
        } else if (direction === 'back' && currentIndex >= Archive.length - 1) {
            return (
                <button className="mainButton arrow" disabled="disabled">
                    ◄
                </button>
            )
        }

        /**find first correct year  */
        // if (pageContext.start == )*/
    }

    function displayShow(show) {
        if (InThePast(show.closes)) {
            return (
                <div className=" archiveKnockout">
                    <h4>{show.title}</h4>
                    <cite className="archiveAuthor">
                        By: {DataList(show.author)}
                    </cite>
                    <cite>
                        {ParseDate(show.opens)},{' '}
                        {new Date(show.opens).getFullYear()} -{' '}
                        {ParseDate(show.closes)},{' '}
                        {new Date(show.closes).getFullYear()}
                    </cite>
                    <p>
                        <b>Directed By:</b> {''}
                        {DataList(show.director)}
                    </p>

                    <p className="cast">
                        <b>Cast: </b>
                        {/* Okay,  @MakeCastList is taking in the show.cast array, pulling all the actors name out and putting that into it's own list. 
                                            Then DataList is doing it's thing and converting that to a properly formatted list of text.*/}
                        {DataList(MakeCastList(show.cast))}
                    </p>
                    {/* {setCastList([])} */}
                </div>
            )
        }
    }

    return (
        <div className="everything">
            <Helmet>
                <title>
                    Season Archive {pageContext.start.toString()}-
                    {pageContext.end.toString()}
                </title>
            </Helmet>
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage topElement">
                    {pageContext.start}- {pageContext.end}
                </h1>
                <div className="card">
                    <div className="seasonHead">
                        {showArrow('back')}
                        <h1>
                            {pageContext.start} - {pageContext.end}
                        </h1>
                        {showArrow('forward')}
                    </div>
                    <div className="seasonYear">
                        {pageContext.shows.map((show) => displayShow(show))}
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}
