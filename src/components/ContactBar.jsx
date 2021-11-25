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
                        <span className="phoneNumber">865-544-1999</span>
                        <span className="phoneIcon">
                            <Phone
                                width={thumbSize}
                                height={thumbSize}
                                fill="#222"
                            />
                        </span>
                    </li>
                    <li>
                        <form action="mailto:infor@theatreknoxville.com">
                            <button className="iconButton">
                                <Email
                                    width={thumbSize}
                                    height={thumbSize}
                                    fill="#222"
                                />
                            </button>
                        </form>
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
                        <form action="https://www.instagram.com/?hl=en">
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
