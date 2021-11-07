import * as React from 'react'
import './styles/index.css'
import '../components/styles/header.css'

import Header from '../components/header'
import Footer from '../components/footer'
import Home from './home'
export default function Index() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <Home />
                <Footer />
            </main>
        </body>
    )
}
