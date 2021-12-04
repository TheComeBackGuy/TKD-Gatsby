import './styles/index.css'
import './styles/home.css'

import * as React from 'react'

import CovidUpdates from '../components/covidUpdate'
import ProductionMasthead from '../components/productionMasthead'
import Quotes from '../images/svg/quotations.svg'
import Reviews from '../content/reviews.json'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

// import EtfLogo from '../images/etf_logo-980x400.png'

export const MainQuery = graphql`
    query mastheadBanner {
        allFile(filter: { relativeDirectory: { eq: "shows" } }) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        fluid(maxWidth: 200, cropFocus: CENTER) {
                            base64
                            originalImg
                            originalName
                        }
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
    }
`

export default function Home() {
    return (
        <main className="mainHome">
            <div className="firstElement">
                <ProductionMasthead />
            </div>
            <CovidUpdates />
            <div className="cardBlank white">
                <h1>Our Guests Agree...</h1>
                <ul className="flexReviews">
                    {Reviews.map((data, index) => {
                        if (data.name !== '' && data.review !== '') {
                            return (
                                <li
                                    key={`content_item_${index}`}
                                    className="reviewItem"
                                >
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
                    <div className="knockoutBlank white etfText">
                        Theatre Knoxville Downtown has received support during
                        the COVID-19 pandemic through a generous grant from the
                        Arts Fund of the East Tennessee Foundation.
                    </div>
                </div>
            </div>
        </main>
    )
}
