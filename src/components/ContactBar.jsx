import '../pages/styles/index.css'
import './styles/ContactBar.css'

import * as React from 'react'

import Email from '../images/svg/email.svg'
import Facebook from '../images/svg/facebook.svg'
import Instagram from '../images/svg/instagram.svg'
import Phone from '../images/svg/phone.svg'
import Twitter from '../images/svg/twitter.svg'

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
                                    width={thumbSize}
                                    height={thumbSize}
                                    fill="#222"
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
                                        width={thumbSize}
                                        height={thumbSize}
                                        fill="#222"
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
                                    width={thumbSize}
                                    height={thumbSize}
                                    fill="#222"
                                />
                            </button>{' '}
                        </form>
                    </li>
                    <li>
                        <form action="https://www.instagram.com/theatreknoxville/">
                            <button className="iconButton">
                                <Instagram
                                    width={thumbSize}
                                    height={thumbSize}
                                    fill="#222"
                                />
                            </button>{' '}
                        </form>
                    </li>
                    <li>
                        <form action="https://twitter.com/theatreknox">
                            <button className="iconButton">
                                <Twitter
                                    width={thumbSize}
                                    height={thumbSize}
                                    fill="#222"
                                />
                            </button>{' '}
                        </form>
                    </li>
                </ul>
            </p>
        </div>
    )
}
