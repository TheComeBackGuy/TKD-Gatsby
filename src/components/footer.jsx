import * as React from 'react'
import './styles/footer.css'

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
                    <li>Donate</li>
                    <li>Volunteer</li>
                </ul>
                <ul className="list">
                    <li>Sponsorships</li>
                    <li>Program Ads</li>
                </ul>
                <ul className="list">
                    <li>Auditions</li>
                    <li>Archive</li>
                </ul>
            </div>
        </footer>
    )
}
