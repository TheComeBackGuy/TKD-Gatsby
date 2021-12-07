import './styles/index.css'
import './styles/auditions.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import InThePast from '../components/InThePast'
import Seasons from '../content/seasons.json'

export default function Auditions() {
    const auditionShow = Seasons[0].shows.find((show) => !InThePast(show.opens))
    console.log(auditionShow)

    return (
        <div className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage topElement">Auditions</h1>
                <img
                    src={`/shows/${auditionShow.image}.jpg`}
                    alt={auditionShow.title}
                    className="showBanner"
                />
                <article className="cardBlank gold">
                    <h1>General Requirements</h1>
                    <p>
                        No monologue is necessary. The audition will consist of
                        cold readings from the script in a group enviroment. A
                        headshot and resume are recommended but not required.
                        Please bring a detailed list of conflicts for the next 3
                        months.
                    </p>
                    <p>
                        At this time, all performers and show volunteers must be
                        vaccinated.
                    </p>
                </article>
                <article className="card">
                    <p>
                        Our next production is Office Hours by Norm
                        Foster.Auditions will be anounced here and on our social
                        media accounts when auditions begin.
                    </p>
                </article>
                <Footer />
            </main>
        </div>
    )
}
