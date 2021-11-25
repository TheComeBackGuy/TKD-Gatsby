import './styles/index.css'
import '../components/styles/header.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import Home from './home'

export default function Index() {
    return (
        <div className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <Home />
                <Footer />
            </main>
        </div>
    )
}
