import './styles/footer.css'

import * as React from 'react'

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
                    <Link to="/donate">
                        <li className="listBullet">Donate</li>
                    </Link>
                    <Link to="/volunteer">
                        <li className="listBullet">Volunteer</li>
                    </Link>
                    <Link to="/theBoard">
                        <li className="listBullet">The Board</li>
                    </Link>

                    <Link to="/sponsorships">
                        <li className="listBullet">Sponsorships</li>
                    </Link>
                    <Link to="/programAds">
                        <li className="listBullet">Program Ads</li>
                    </Link>

                    <Link to="/auditions">
                        <li className="listBullet">Auditions</li>
                    </Link>
                    {/* <Link to="/archive">
                        <li className="listBullet">Archive</li>
                    </Link> */}
                </ul>
            </div>
        </footer>
    )
}
