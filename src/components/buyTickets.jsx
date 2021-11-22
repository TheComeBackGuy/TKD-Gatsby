import '../pages/styles/index.css'
import './styles/buyTickets.css'

import * as React from 'react'

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
