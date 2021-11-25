import './styles/header.css'
import '../pages/styles/index.css'

import * as React from 'react'

import ContactBar from '../components/ContactBar'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'
import { StaticImage } from 'gatsby-plugin-image'
import thisSeason from '../content/thisYear.json'
import { useState } from 'react'

export default function Header(props) {
    const [dropDown, setDropDown] = useState(false)
    const upcomingShowImages = []
    const today = new Date()

    const currentShow = () => {
        /***compare today with end date of all shows. whichever show is the first to pass the test, use it's image as the header.*/
        // use the variable to search a query
        /**Use it's link as the link */

        thisSeason.map((show) => {
            const closing = new Date(show.closes)
            console.log(closing + ' entry')
            if (today.getTime() <= closing.getTime()) {
                console.log(show.title + ' ends on ' + show.closes)
                upcomingShowImages.push(show.image)
            }
        })
        console.log(upcomingShowImages)
    }

    currentShow()

    return (
        <header className="headerConstraint">
            <ContactBar />
            <div className="headerGrid">
                <div className="logoBox">
                    <Link to="/">
                        <Img fixed={`../images/${upcomingShowImages}.jpg`} />
                        <StaticImage
                            src="../images/logo2.png"
                            alt="Theatre Knoxville Downtown Logo"
                            className="logo"
                            description="An outline of the Knoxville skyline is encasing the words Theatre Knoxville Downtown in a script font "
                        />
                    </Link>
                </div>
                <div className="navBlock">
                    <button
                        className="hamburgerButton"
                        onClick={() => {
                            setDropDown(!dropDown)
                            // console.log({ dropDown })
                        }}
                    >
                        <ul className="hamburger">
                            <li
                                className="hamburgerLayers"
                                key={Math.random() * 500}
                            ></li>
                            <li
                                className="hamburgerLayers"
                                key={Math.random() * 500}
                            ></li>
                            <li
                                className="hamburgerLayers"
                                key={Math.random() * 500}
                            ></li>
                        </ul>
                    </button>
                    <Nav aStyle="desktop" />
                </div>
            </div>
            <MobileNav aStyle="mobile" isActive={dropDown} />
        </header>
    )
}
