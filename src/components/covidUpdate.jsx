import './styles/covidUpdate.css'
import '../pages/styles/index.css'

import * as React from 'react'

import Bandage from '../images/svg/bandageIcon.svg'
import Mask from '../images/svg/maskIcon.svg'

export default function CovidUpdate() {
    return (
        <div className="card">
            <h1>Health and Safety Updates</h1>
            <p>
                TKD is dedicated to keeping it's performers, volunteers, and
                guests as safe as we can during the ebb and flow of this
                outbreak. We are routinely revisiting our policies reguarding
                social distancing and mask use.
            </p>
            <p>
                We would like to extend our thanks to all of our guests who have
                been so understanding. We have experienced almost no issues with
                masks remaining on and, like you, are eager to see a conclusion
                to it.{' '}
            </p>
            <div className="covidSolutions">
                <p>
                    <Bandage />
                    <br />
                    Currently, all performers and production volunteers are
                    required to be vaccinated but not required to wear masks.
                </p>
                <p>
                    <Mask />
                    <br />
                    Conversly, masks are required for all patrons and box office
                    volunteers, reguardless of vaccination status.{' '}
                </p>
            </div>
        </div>
    )
}
