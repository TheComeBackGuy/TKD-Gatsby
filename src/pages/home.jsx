import './styles/home.css'
import './styles/pages.css'

import * as React from 'react'

import CovidUpdates from '../components/covidUpdate'
import ProductionMasthead from '../components/productionMasthead'
import Quotes from '../images/svg/quotations.svg'
import Reviews from '../content/reviews.json'
import { StaticImage } from 'gatsby-plugin-image'

// import EtfLogo from '../images/etf_logo-980x400.png'

export default function Home() {
    // function displayReview() {
    //     Reviews.map((data, index) => {
    //         if (data.name != '' && data.review != '') {
    //             return (
    //                 <li key={`content_item_${index}`}>
    //                     <div className="knockoutWhite">
    //                         <p>{data.review}</p>
    //                         {''}
    //                         <h3>-{data.name}</h3>
    //                         {''}
    //                         <h4>
    //                             {data.city}, {data.state}
    //                         </h4>
    //                     </div>
    //                 </li>
    //             )
    //         }
    //     })
    // }

    return (
        <main className="mainHome">
            <ProductionMasthead
                title="doublewide"
                status="Now in production - Learn More"
            />

            <CovidUpdates />
            <div className="cardBlank white">
                <h1>Our Guests Agree...</h1>
                <ul className="flexReviews">
                    {Reviews.map((data, index) => {
                        if (data.name !== '' && data.review !== '') {
                            return (
                                <li key={`content_item_${index}`}>
                                    <div className="knockoutBlank bgColor">
                                        <Quotes />
                                        <p>{data.review}</p>
                                        {''}
                                        <h3>{data.name}</h3>
                                        {''}
                                        <h4>
                                            {data.city}, {data.state}
                                        </h4>
                                    </div>
                                </li>
                            )
                        } else {
                            return ''
                        }
                    })}
                </ul>
            </div>
            <div className="cardBlank lightGrey">
                <h1>East Tennessee Foundation</h1>

                <div className="etfGrid">
                    <div className="etfLogo">
                        <StaticImage
                            src="../images/etf_logo-980x400.png"
                            alt="East Tennessee Foundation"
                            placeholder="dominantColor"
                        />
                    </div>
                    <div className="knockoutBlank white">
                        Theatre Knoxville Downtown has received support during
                        the COVID-19 pandemic through a generous grant from the
                        Arts Fund of the East Tennessee Foundation.
                    </div>
                </div>
            </div>
        </main>
    )
}
