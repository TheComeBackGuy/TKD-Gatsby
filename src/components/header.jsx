import * as React from 'react'
import './styles/header.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Header(props) {
    return (
        <header className="headerConstraint">
            <div className="headerGrid">
                <div className="logo">
                    <StaticImage
                        src="../images/logo2.png"
                        alt="Theatre Knoxville Downtown Logo"
                        // height="75px"
                        description="An outline of the Knoxville skyline is encasing the words Theatre Knoxville Downtown in a script font "
                    />
                </div>
                <div className="navSpace">
                    <nav>
                        <ul>
                            <li>
                                <button>Tickets</button>
                            </li>
                            <li>
                                <button>Parking</button>
                            </li>
                            <li>
                                <button>Current Season</button>
                            </li>
                            <li>
                                <button>Auditions</button>
                            </li>
                            <li>
                                <button>Donate</button>
                            </li>
                            {/* <NavList /> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
