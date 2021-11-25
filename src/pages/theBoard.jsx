import './styles/index.css'
import './styles/theBoard.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

export default function TheBoard() {
    return (
        <div className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">Board of Directors</h1>
                <div className="card">
                    <ul className="boardNames">
                        <li>
                            <h3 className="president">
                                President: Sarah Campbell
                            </h3>
                        </li>
                        <li>
                            <h3 className="vice">
                                Vice-President: Joe Johnson
                            </h3>
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
