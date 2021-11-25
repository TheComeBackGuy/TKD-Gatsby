import './styles/index.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

export default function Archive() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">Archive</h1>
                <Footer />
            </main>
        </body>
    )
}
