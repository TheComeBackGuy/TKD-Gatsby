import * as React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import './styles/pages.css'
export default function Index() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">2021/22 SEASON</h1>
                <Footer />
            </main>
        </body>
    )
}
