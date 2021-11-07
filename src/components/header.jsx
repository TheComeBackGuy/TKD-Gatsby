import * as React from 'react'
import './styles/header.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export default function Header(props) {
    return (
        <header className="headerConstraint">
            <div className="headerGrid">
                <div className="logo">
                    <Link to="/">
                        <StaticImage
                            src="../images/logo2.png"
                            alt="Theatre Knoxville Downtown Logo"
                            // height="75px"
                            description="An outline of the Knoxville skyline is encasing the words Theatre Knoxville Downtown in a script font "
                        />
                    </Link>
                </div>
                <div className="navSpace">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/currentSeason">
                                    <button>Current Season</button>
                                </Link>
                            </li>
                            <li>
                                {' '}
                                <Link to="/parking">
                                    <button>Parking</button>
                                </Link>
                            </li>
                            <li>
                                {' '}
                                <Link to="/auditions">
                                    <button>Auditions</button>
                                </Link>
                            </li>
                            <li>
                                {' '}
                                <Link to="/donate">
                                    <button>Donate</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
