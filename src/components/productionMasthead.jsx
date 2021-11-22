import './styles/productionMasthead.css'

import * as React from 'react'

import BuyTickets from './buyTickets'
import { StaticImage } from 'gatsby-plugin-image'

export default function ProductionMasthead(props) {
    return (
        <aritcle className="mastheadContainer">
            <button className="showStatus">{props.status.toUpperCase()}</button>
            <StaticImage
                src={`../images/show-doublewide.jpg`}
                alt={props.title}
                className="banner"
            />
            <BuyTickets url="https://www.onthestage.tickets/show/theatre-knoxville-downtown/a-doublewide-texas-christmas-81671/tickets" />
        </aritcle>
    )
}
