// import './styles/currentSeason.css'
// import './styles/index.css'

// import * as React from 'react'

// import BuyTickets from '../components/buyTickets'
// import FindImage from '../components/FindImage'
// import GatsbyImage from 'gatsby-image'
// import InThePast from '../components/InThePast'
// import { Link } from 'gatsby'
// import { getImage } from 'gatsby-plugin-image'
// import { graphql } from 'gatsby'
// import thisSeason from '../content/thisYear.json'

// // import MainQuery from '../components/MainQuery'

// // import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// /**the query just looks for jpgs in the shows folder
//  * that will be where all promo/posters will be for shows
//  */
// export const MainQuery = graphql`
//     query mastheadBanner {
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

// export default function ProductionMasthead({ data }) {
//     const imageData = data.allFile.edges
//     // const imageData = showImageSearch
//     console.log('Masthead Banner is: ')
//     console.log(data)

//     /**We want to find the first image who's closing date isn't in the future */
//     function banner() {
//         const show = thisSeason.find((show) => !InThePast(show.closes))
//         console.log(show.title + ' closes on ' + show.closes)
//         console.log(show.image)
//         console.log(FindImage(imageData, show.image))
//         return (
//             <div className="card">
//                 {show.title} <br />
//                 {show.image}
//                 <GatsbyImage
//                     image={getImage(FindImage(imageData, show.image))}
//                     alt={show.title}
//                     width="100"
//                 />
//             </div>
//         )
//     }

//     return (
//         <div className="mastheadContainer topElement">
//             <button className="showStatus">Banner</button>

//             {banner()}
//             <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
//         </div>
//     )
// }
