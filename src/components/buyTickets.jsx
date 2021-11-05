import * as React from 'react'
import './styles/buyTickets.css'

export default function BuyTickets(props) {
    const text = 'Buy Tickets'

    return (
        <button
            className="callToActionButton"
            onClick={() => window.open(props.url, '_self')}
        >
            {text.toUpperCase()}
        </button>
    )
}
