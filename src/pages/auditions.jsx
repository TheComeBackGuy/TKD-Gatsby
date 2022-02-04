import './styles/index.css'
import './styles/auditions.css'
import '../templates/production.css'

import * as React from 'react'

import DataList from '../components/DataList'
import Footer from '../components/footer'
import Header from '../components/header'
import { Helmet } from 'react-helmet'
import InThePast from '../components/InThePast'
import ParseDate from '../components/ParseDate'
import Seasons from '../content/seasons.json'

export default function Auditions() {
    const auditionShow = Seasons[0].shows.find((show) => !InThePast(show.opens))
    console.log(auditionShow)

    function showRehearsals(show) {
        console.log('submitting: ' + show.rehearsalStartDate)
        //first checking to make sure it's not empty
        if (show.rehearsalStartDate === '') {
            return <>TBD</>
        }
        //okay, not empty? check to see if the last date is in the past
        else if (InThePast(show.rehearsalStartDate)) {
            return (
                <div className="punch">
                    Rehearsals for this production have already started.
                </div>
            )
        }
        //not in the past? Great. Show the dates.
        else if (!InThePast(show.rehearsalStartDate)) {
            return <>{ParseDate(show.rehearsalStartDate)}</>
        }
    }

    function showAuditionDates(show) {
        console.log('submitting: ' + show.auditionDates)
        //first checking to make sure it's not empty
        if (show.auditionDates.length === 0 || show.auditionDates === '') {
            return <p>TBD</p>
        }
        //okay, not empty? check to see if the last date is in the past
        else if (InThePast(show.auditionDates)) {
            return (
                <div className="punch">
                    Sorry, auditions for this show have already passed.
                </div>
            )
        }
        //not in the past? Great. Show the dates.
        else if (!InThePast(show.auditionDates)) {
            return (
                <ul>
                    {show.auditionDates.map((date) => {
                        return <li>{ParseDate(date, 'auditions')}</li>
                    })}
                </ul>
            )
        }
    }

    return (
        <div className="everything">
            <Helmet>
                <title>Audition Info</title>
            </Helmet>
            <header>
                <Header />
            </header>
            <main className="container">
                <h1 className="standardPage topElement ">Auditions</h1>
                {/* <img
                    src={`/shows/${auditionShow.image}_poster.jpg`}
                    alt="What images?"
                    className="showBanner optional"
                /> */}
                <article className="cardBlank lightGrey">
                    {/* <h1>General Requirements</h1> */}
                    <ul className="auditionConstants">
                        <li className="knockout white note">
                            No monologue is necessary. The audition will consist
                            of cold readings from the script in a group
                            enviroment.
                        </li>
                        <li className="knockout white note">
                            A headshot and resume are recommended but not
                            required.
                        </li>
                        <li className="knockout white note">
                            Please bring a detailed list of conflicts for the
                            next 3 months.
                        </li>
                    </ul>
                    <p className="knockoutBlank covid">
                        At this time, all performers and show volunteers must be
                        vaccinated.
                    </p>
                </article>

                <article className="card auditionInfo">
                    <div className="auditionContainer">
                        <img
                            src={`../shows/${auditionShow.image}_poster.jpg`}
                            alt={auditionShow.image}
                            className="showImage"
                        />
                        <div className="detailsContainer">
                            <h1 className="showName">{auditionShow.title}</h1>
                            <h3 className="author">
                                by {DataList(auditionShow.author)}
                            </h3>
                            <h3 className="director">
                                Directed by: {DataList(auditionShow.director)}
                            </h3>
                            <h4>Show starts {ParseDate(auditionShow.opens)}</h4>
                            <h4>
                                Rehearsals start {showRehearsals(auditionShow)}
                            </h4>
                            <h3 className="details">Audition Dates</h3>
                            {showAuditionDates(auditionShow, 'audition')}
                            <h3 className="details">Summary</h3>
                            <div
                                class="summary"
                                dangerouslySetInnerHTML={{
                                    __html: auditionShow.description,
                                }}
                            ></div>
                            <h3 className="details">Characters</h3>
                            <ul>
                                {auditionShow.cast.map((character) => {
                                    return (
                                        <li className="character">
                                            <strong> {character.name}</strong>:{' '}
                                            {character.description}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </article>
                <Footer />
            </main>
        </div>
    )
}
