import './styles/header.css'
import '../pages/styles/index.css'

import * as React from 'react'

import ContactBar from '../components/ContactBar'
import { Link } from 'gatsby'
import Logo from '../images/logo2.png'
import MobileNav from '../components/MobileNav'
import Nav from '../components/Nav'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

export default function Header(props) {
    const [dropDown, setDropDown] = useState(false)
    const onPage = props.onPage
    /** We're detecting if the user scrolled down and if we're in desktop veiw
     * If they scroll dow, we shrink the navbar.
     */
    // window.onscroll = () => {
    //     if (window.scrollY >= 100 && window.innerWidth >= 850) {
    //         document.body.querySelector('.headerGrid').classList.add('shrink')
    //         document.body.querySelector('.logo').classList.add('logoShrink')
    //         /**If they scroll back to the top, we make the bar the original size
    //          * by deleting the style we added.
    //          */
    //     } else if (window.scrollY < 100 && window.innerWidth >= 850) {
    //         document.body
    //             .querySelector('.headerGrid')
    //             .classList.remove('shrink')
    //         document.body.querySelector('.logo').classList.remove('logoShrink')
    //         /**but if the window is smaller than the size our hamburger menu
    //          * kicks in, it doesn't shrink anything. It makes sure to remove the style
    //          * as soon as it loads in.
    //          */
    //     } else if (window.innerWidth < 850) {
    //         document.body
    //             .querySelector('.headerGrid')
    //             .classList.remove('shrink')
    //         document.body.querySelector('.logo').classList.remove('logoShrink')
    //     }

    //     // console.log(window.scrollY)
    // }

    return (
        <header className="headerConstraint">
            <ContactBar />
            <div className="headerGrid">
                <div className="logoBox">
                    <Link to="/">
                        <img src={Logo} className="logo" />
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
                    <Nav aStyle="desktop" onPage={onPage} />
                </div>
            </div>
            <MobileNav aStyle="mobile" isActive={dropDown} />
        </header>
    )
}
