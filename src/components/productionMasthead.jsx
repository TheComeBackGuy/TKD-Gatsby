import * as React from 'react'
import './styles/productionMasthead.css'
import { StaticImage } from 'gatsby-plugin-image'
import BuyTickets from './buyTickets'

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
