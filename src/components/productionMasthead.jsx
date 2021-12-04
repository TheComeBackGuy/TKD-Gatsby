import './styles/ProductionMasthead.css'
import '../pages/styles/index.css'

import * as React from 'react'

import BuyTickets from './buyTickets'
import { graphql } from 'gatsby'

// import MainQuery from '../components/MainQuery'

// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
/**the query just looks for jpgs in the shows folder
 * that will be where all promo/posters will be for shows
//  */
// export const BannerQuery = graphql`
//     query mastheadBannerOne {
//         allFile(filter: { relativeDirectory: { eq: "shows" } }) {
//             edges {
//                 node {
//                     id
//                     name
//                     childImageSharp {
//                         fluid(maxWidth: 200, cropFocus: CENTER) {
//                             base64
//                             originalImg
//                             originalName
//                         }
//                         gatsbyImageData(
//                             placeholder: DOMINANT_COLOR
//                             layout: CONSTRAINED
//                         )
//                     }
//                 }
//             }
//         }
//     }
// `

export default function ProductionMasthead({ data }) {
    // const imageData = data.allFile.edges
    // const imageData = showImageSearch
    if (data) {
        console.log('Masthead Banner is: ')
        console.log(data)
    }

    /**We want to find the first image who's closing date isn't in the future */
    // function banner() {
    //     const show = thisSeason.find((show) => !InThePast(show.closes))
    //     console.log(show.title + ' closes on ' + show.closes)
    //     console.log(show.image)
    //     console.log(FindImage(imageData, show.image))
    //     return (
    //         <div className="card">
    //             {show.title} <br />
    //             {show.image}
    //             <GatsbyImage
    //                 image={getImage(FindImage(imageData, show.image))}
    //                 alt={show.title}
    //                 width="100"
    //             />
    //         </div>
    //     )
    // }

    return (
        <div className="mastheadContainer topElement">
            <button className="showStatus">Banner</button>

            {/* {banner()} */}
            <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
        </div>
    )
}
