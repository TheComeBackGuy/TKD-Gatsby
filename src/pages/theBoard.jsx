import './styles/index.css'
import './styles/theBoard.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import { Helmet } from 'react-helmet'

export default function TheBoard() {
    return (
        <div className="everything">
            <Helmet>
                <title>Board of Directors</title>
            </Helmet>
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage topElement">Board of Directors</h1>
                <div className="card">
                    <ul className="boardNames">
                        <li>
                            <h1 className="president">
                                President: Sarah Campbell
                            </h1>
                        </li>
                        <li>
                            <h2 className="vice">
                                Vice-President: Joe Johnson
                            </h2>
                        </li>
                        <li>
                            <h3 className="boardMember">
                                Secretary: Courtney Woolard{' '}
                            </h3>
                        </li>
                        <li>
                            <h3 className="boardMember">
                                Treasurer: Windie Wilson
                            </h3>
                        </li>
                        <li>
                            <h3 className="boardMember">Dennis Hart</h3>
                        </li>
                        <li>
                            <h3 className="boardMember">
                                Arisa Carero Spencer
                            </h3>
                        </li>
                    </ul>
                </div>
                <Footer />
            </main>
        </div>
    )
}
