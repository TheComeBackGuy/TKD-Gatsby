import * as React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'
import './styles/pages.css'
import './styles/donate.css'

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
                            <StaticImage
                                className="logo"
                                src="../images/Paypal.svg"
                                alt="Paypal Logo"
                                description="The words Paypal."
                            />
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
                                {/* <input
                                    type="image"
                                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                                    border="0"
                                    name="submit"
                                    title="PayPal - The safer, easier way to pay online!"
                                    alt="Donate with PayPal button"
                                /> */}
                                {/* <img
                                    alt=""
                                    border="0"
                                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                                    width="1"
                                    height="1"
                                /> */}
                            </form>
                        </div>
                        <div className="knockout amazonSmile">
                            <StaticImage
                                className="logo"
                                src="../images/svg/amazon-smile.svg"
                                alt="Amazon Smile Logo"
                                description="The words Amazon Smile followed by 'You shop. Amazon Gives."
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
                            {' '}
                            <StaticImage
                                className="logo"
                                src="../images/svg/Kroger.svg"
                                alt="Kroger Logo"
                                description="The words Kroger"
                                // hieght="100px"
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
