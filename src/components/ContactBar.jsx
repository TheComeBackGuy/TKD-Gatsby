import '../pages/styles/index.css'
import './styles/ContactBar.css'

import * as React from 'react'

import Email from '../images/svg/email.svg'
import Facebook from '../images/svg/Facebook.jsx'
import Instagram from '../images/svg/Instagram.jsx'
import Phone from '../images/svg/phone.svg'
import Twitter from '../images/svg/Twitter.jsx'

export default function ContactBar() {
    const thumbSize = '15px'

    return (
        <div className="contactBar">
            <p className="contactContainer">
                <ul className="contactList ">
                    <li>
                        <div className="phone">
                            <button
                                className="iconButton"
                                onclick="window.open('tel:8655441999')"
                            >
                                <Phone
                                    width="auto"
                                    height={thumbSize}
                                    className="phoneIcon"
                                    fill="white"
                                />
                            </button>
                            <p className="phoneNumber">(865)544-1999</p>
                        </div>
                    </li>
                    <li>
                        <div className="phone">
                            <form action="mailto:info@theatreknoxville.com">
                                <button className="iconButton">
                                    <Email
                                        width="auto"
                                        height={thumbSize}
                                        className="emailIcon"
                                        fill="white"
                                    />
                                </button>
                            </form>
                            <p className="email">info@TheatreKnoxville.com</p>
                        </div>
                    </li>
                    <li>
                        <form action="https://www.facebook.com/theatreknoxvilledowntown">
                            <button className="iconButton">
                                <Facebook
                                    width="auto"
                                    height={thumbSize}
                                    fill="white"
                                />
                            </button>
                        </form>
                    </li>
                    <li>
                        <form action="https://www.instagram.com/theatreknoxville/">
                            <button className="iconButton">
                                <Instagram
                                    width="auto"
                                    height={thumbSize}
                                    fill="white"
                                />
                            </button>{' '}
                        </form>
                    </li>
                    <li>
                        <form action="https://twitter.com/theatreknox">
                            <button className="iconButton">
                                <Twitter
                                    width="auto"
                                    height={thumbSize}
                                    fill="white"
                                />
                            </button>{' '}
                        </form>
                    </li>
                </ul>
            </p>
        </div>
    )
}
