import './styles/index.css'
import './styles/sponsorships.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

export default function Sponsorships() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">Be a part of the community!</h1>
                <div className="card">
                    <h1>Levels of support</h1>
                    <p>
                        Theatre Knoxville Downtown is a 501(c)(3) organization
                        that has been operating continuously in Knoxville since
                        1976. We produce 8 full-length shows each season, with
                        11 performances of each. With a capacity of 100 people
                        each night, that’s up to 1100 patrons for each show!
                        Purchasing an ad in our program shows your support for a
                        local, all-volunteer organization dedicated to producing
                        a high-quality theater experience on a consistent and
                        sustained basis.
                    </p>
                    <div className="supportContainer">
                        <div className="sponsorKnockout lightGrey">
                            <h3 className="sponsorLevel">Entire Season</h3>
                            <h3 className="sponsorPrice">12,000</h3>
                            <ul className="sponsorBenefits">
                                <li>
                                    Recognition from the stage at all
                                    performances
                                </li>
                                <li>
                                    Logo displayed prominently on this web site
                                    and in the theater lobby
                                </li>
                                <li>
                                    Recognition on social media and email
                                    campaigns
                                </li>
                                <li>
                                    Acknowledgement and logo in programs and on
                                    posters for all 8 shows
                                </li>
                                <li>4 full-season tickets</li>
                                <li>
                                    Sign up for 2 seasons for only $22,000! (6
                                    season tickets)
                                </li>
                                <li>
                                    Sign up for 3 seasons for only $30,000! (8
                                    season tickets)
                                </li>
                            </ul>
                        </div>
                        <div className="sponsorKnockout lightGrey">
                            {' '}
                            <h3 className="sponsorLevel">Fall or Spring</h3>
                            <h3 className="sponsorPrice">6,500</h3>
                            <ul className="sponsorBenefits">
                                <li>
                                    Recognition from the stage at all
                                    performances for 4 sponsored shows
                                </li>
                                <li>
                                    Recognition on social media and email
                                    campaigns for 4 sponsored shows
                                </li>
                                <li>
                                    Acknowledgement and logo in programs and on
                                    posters for 4 sponsored shows
                                </li>
                                <li>4 half-season tickets</li>
                            </ul>
                        </div>
                        <div className="sponsorKnockout lightGrey">
                            {' '}
                            <h3 className="sponsorLevel">Single Show</h3>
                            <h3 className="sponsorPrice">1,800</h3>
                            <ul className="sponsorBenefits">
                                <li>
                                    Recognition from the stage at all
                                    performances for the sponsored show
                                </li>
                                <li>
                                    Recognition on social media and email
                                    campaigns for the sponsored show
                                </li>
                                <li>
                                    Acknowledgement and logo in programs and on
                                    poster for the sponsored show
                                </li>
                                <li>8 tickets for the sponsored show</li>
                            </ul>
                        </div>
                    </div>
                    <form action="http://www.theatreknoxville.com/wp-content/uploads/2019/04/sponsoragreementform19_20.pdf">
                        <input
                            type="submit"
                            value="Download the Form"
                            className="signUpButton"
                        />
                    </form>
                </div>
                <Footer />
            </main>
        </body>
    )
}
