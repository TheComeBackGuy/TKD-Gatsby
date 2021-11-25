import './styles/index.css'
import './styles/donate.css'

import * as React from 'react'

import Amazon from '../images/svg/amazon-smile.svg'
import Footer from '../components/footer'
import Header from '../components/header'
import Kroger from '../images/svg/Kroger.svg'
import PaypalLogo from '../images/svg/Paypal'
import { StaticImage } from 'gatsby-plugin-image'

export default function Donate() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">Donate</h1>
                <article className="card">
                    Outside of our day-to-day operation needs, we always need
                    building supplies for sets, props, and cotumes for our
                    shows. We appreciate every cent of support we get. Here are
                    three ways to easily support us.
                    <div className="donateGrid">
                        <div className="knockout paypal">
                            <PaypalLogo className="logo" />
                            <p>
                                Make a one-time contribution by credit card or
                                with an existing PayPal account. You may also
                                choose to donate monthly!
                            </p>
                            <form
                                action="https://www.paypal.com/donate"
                                method="post"
                                target="_top"
                            >
                                <input
                                    type="hidden"
                                    name="hosted_button_id"
                                    value="NXF5VSVXZF6QQ"
                                />
                                <button className="paypalButton">
                                    Donate with Paypal
                                </button>
                            </form>
                        </div>
                        <div className="knockout amazonSmile">
                            <Amazon
                                className="logo"
                                alt="Amazon Logo"
                                description="The Amazon logo."
                            />
                            <p>
                                Shop at smile.amazon.com and they’ll donate to
                                your favorite charitable organization, at no
                                cost to you.
                            </p>
                            <button className="amazonButton">
                                Shop at Amazon
                            </button>
                        </div>
                        <div className="knockout kroger">
                            <Kroger
                                className="logo"
                                alt="Paypal Logo"
                                description="The words Paypal."
                            />
                            <p>
                                Earn money for TKD every time you use your
                                loyalty card. Choose “Theatre Knoxville
                                Downtown” in the Community Rewards section of
                                your profile.
                            </p>
                            <button className="krogerButton">
                                Shop at Kroger
                            </button>
                        </div>
                    </div>
                </article>

                <Footer />
            </main>
        </body>
    )
}
