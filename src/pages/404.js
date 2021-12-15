import './styles/index.css'

import * as React from 'react'

import { Link, navigate } from 'gatsby'

import Ghost from '../images/svg/ghost.svg'

// styles
const pageStyles = {
    color: `var( --tkdLightGrey)`,
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: '#8A6534',
    padding: 4,
    backgroundColor: '#FFF4DB',
    fontSize: '1.25rem',
    borderRadius: 4,
}

// markup
const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
            <title>No page here</title>
            <Ghost />
            <h1>OOPS!</h1>
            <h4>You found the ghost of the theatre page!</h4>
            <p style={paragraphStyles}>
                There wasn't a page here, but maybe start at the home page?
                <br />
                <br />
                <button
                    className="mainButton"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    {' '}
                    Go home
                </button>
            </p>
        </main>
    )
}

export default NotFoundPage
