import * as React from 'react'
import ProductionMasthead from '../components/productionMasthead'
import CovidUpdates from '../components/covidUpdate'
import './styles/home.css'
import './styles/pages.css'
import Reviews from '../content/reviews.json'
import Quotes from '../images/svg/quotations.svg'
// import EtfLogo from '../images/etf_logo-980x400.png'
import { StaticImage } from 'gatsby-plugin-image'

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
        <main>
            <ProductionMasthead
                title="doublewide"
                status="Now in production - Learn More"
            />

            <CovidUpdates />
            <div className="card">
                <h1>Our Guests Agree...</h1>
                <ul className="flexReviews">
                    {Reviews.map((data, index) => {
                        if (data.name !== '' && data.review !== '') {
                            return (
                                <li key={`content_item_${index}`}>
                                    <div className="knockoutWhite bgColor">
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
            <div className="card">
                <h1>East Tennessee Foundation</h1>

                <div className="etfGrid">
                    <div>
                        <StaticImage
                            src="../images/etf_logo-980x400.png"
                            alt="East Tennessee Foundation"
                            placeholder="dominantColor"
                        />
                    </div>
                    <div className="knockout">
                        Theatre Knoxville Downtown has received support during
                        the COVID-19 pandemic through a generous grant from the
                        Arts Fund of the East Tennessee Foundation.
                    </div>
                </div>
            </div>
        </main>
    )
}
