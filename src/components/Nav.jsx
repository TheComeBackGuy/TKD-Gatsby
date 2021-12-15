import './styles/Nav.css'

import * as React from 'react'

import { Link } from 'gatsby'
import TopNav from '../content/TopNav.json'
import { navigate } from 'gatsby'

export default function Nav(props) {
    // if (props.aStyle == 'mobile' && props.isActive) {
    function goToPage(x) {}

    return (
        <nav className={`desktopMenu`}>
            {TopNav.map((data, index) => {
                return (
                    <button
                        key={`content_item_${index}`}
                        className="navLink"
                        onClick={() => {
                            navigate(`/${data.url}/`)
                        }}
                    >
                        {data.label}
                    </button>
                )
            })}
        </nav>
    )
    // }
    // return null
}
