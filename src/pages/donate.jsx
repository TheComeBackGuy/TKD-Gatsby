import './styles/index.css'
import './styles/donate.css'

import * as React from 'react'

import Amazon from '../images/svg/amazon-smile.svg'
import Footer from '../components/footer'
import Header from '../components/header'
import { Helmet } from 'react-helmet'
import Kroger from '../images/svg/Kroger.svg'
import PaypalLogo from '../images/svg/Paypal'

export default function Donate() {
    const onPage = 'donate'
    return (
        <div className="everything">
            <Helmet>
                <title>Donate to TKD!</title>
            </Helmet>
            <header>
                <Header page="donate" onPage={onPage} />
            </header>
            <main className="container">
                <h1 className="standardPage topElement">Donate</h1>
                <article className="card">
                    Outside of our day-to-day operation needs, we always need
                    building supplies for sets, props, and cotumes for our
                    shows. We appreciate every cent of support we get. Here are
                    three ways to easily support us.
                    <div className="donateGrid">
                        <div className="knockout donateCard">
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
                                <button className="mainButton">
                                    Donate with Paypal
                                </button>
                            </form>
                        </div>
                        <div className="knockout donateCard">
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
                            <form
                                action="https://smile.amazon.com/gp/chpf/homepage?orig=%2F"
                                method="post"
                                target="_top"
                            >
                                <button className="mainButton">
                                    Shop at Amazon
                                </button>
                            </form>
                        </div>
                        <div className="knockout donateCard">
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
                            <form
                                action="https://www.kroger.com/i/community/community-rewards/"
                                method="post"
                                target="_top"
                            >
                                <button className="mainButton">
                                    Shop at Kroger
                                </button>
                            </form>
                        </div>
                    </div>
                </article>

                <Footer />
            </main>
        </div>
    )
}
