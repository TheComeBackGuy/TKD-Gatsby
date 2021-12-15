import './styles/footer.css'

import * as React from 'react'

import FooterLinks from '../content/footerNav.json'
import { Link } from 'gatsby'

export default function Footer() {
    return (
        <footer>
            <div className="footerGrid">
                <p className="address">
                    Theatre Knoxville Downtown <br />
                    P.O. Box 2502
                    <br />
                    800 S. Central Street
                    <br />
                    Knoxville, TN 37902
                </p>
                <ul className="list">
                    {FooterLinks.map((link) => {
                        return (
                            <Link to={`/${link.url}`}>
                                <li className="listBullet">{link.title}</li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}
