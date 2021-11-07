import * as React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import './styles/pages.css'
import './styles/theBoard.css'

export default function TheBoard() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">Board of Directors</h1>
                <div className="card">
                    <ul className="boardNames">
                        <li>
                            <h1>President: Sarah Campbell</h1>
                        </li>
                        <li>
                            <h1>Vice-President: Joe Johnson</h1>
                        </li>
                        <li>
                            <h2>Secretary: Courtney Woolard </h2>
                        </li>
                        <li>
                            <h2>Treasurer: Windie Wilson</h2>
                        </li>
                        <li>
                            <h3>Dennis Hart</h3>
                        </li>
                        <li>
                            <h3>Arisa Carero Spencer</h3>
                        </li>
                    </ul>
                </div>
                <Footer />
            </main>
        </body>
    )
}
