import './styles/Nav.css'

import * as React from 'react'

import { Link } from 'gatsby'
import TopNav from '../content/TopNav.json'

export default function Nav(props) {
    // if (props.aStyle == 'mobile' && props.isActive) {
    return (
        <ul className={`desktopMenu`}>
            {TopNav.topNav.map((data, index) => {
                return (
                    <li key={`content_item_${index}`}>
                        <Link to={`/${data.url}/`}>
                            <button>{data.label}</button>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
    // }
    // return null
}
