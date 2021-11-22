import './styles/header.css'
import '../pages/styles/index.css'

import * as React from 'react'

import ContactBar from '../components/ContactBar'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Header(props) {
    return (
        <header className="headerConstraint">
            <ContactBar />
            <div className="headerGrid">
                <div className="logoBox">
                    <Link to="/">
                        <StaticImage
                            src="../images/logo2.png"
                            alt="Theatre Knoxville Downtown Logo"
                            className="logo"
                            description="An outline of the Knoxville skyline is encasing the words Theatre Knoxville Downtown in a script font "
                        />
                    </Link>
                </div>
                <div className="navBlock">
                    <ul className="hamburger">
                        <li className="hamburgerLayers"></li>
                        <li className="hamburgerLayers"></li>
                        <li className="hamburgerLayers"></li>
                    </ul>
                    <ul className="desktopMenu">
                        <li>
                            <Link to="/currentSeason">
                                <button>Current Season</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/parking">
                                <button>Parking</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/auditions">
                                <button>Auditions</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/donate">
                                <button>Donate</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
