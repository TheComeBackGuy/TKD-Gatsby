import './styles/header.css'
import '../pages/styles/index.css'

import * as React from 'react'

import ContactBar from '../components/ContactBar'
import { Link } from 'gatsby'
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

export default function Header(props) {
    const [dropDown, setDropDown] = useState(false)

    const query = graphql`
        query myQuery {
            doublewide: file(name: { eq: "doublewide" }) {
                id
                childImageSharp {
                    gatsbyImageData
                }
            }
            officeHours: file(name: { eq: "officeHours" }) {
                id
                childImageSharp {
                    gatsbyImageData
                }
            }
            iHateHamlet: file(name: { eq: "iHateHamlet" }) {
                id
                childImageSharp {
                    gatsbyImageData
                }
            }
            rope: file(name: { eq: "rope" }) {
                id
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `
    console.log(query)
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
