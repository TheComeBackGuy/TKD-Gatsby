import './styles/index.css'
import './styles/archive.css'

import * as React from 'react'

import Archives from '../content/seasons.json'
import Footer from '../components/footer'
import Header from '../components/header'
import Helmet from 'react-helmet'
import { navigate } from 'gatsby'

export default function Archive() {
    // const [castList, setCastList] = useState([])
    // let castList = []

    return (
        <div className="everything">
            <Helmet>
                <title>Archives</title>
            </Helmet>
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage topElement">Archive</h1>

                <div className="card">
                    <h1>Choose A Year</h1>
                    {Archives.map((season) => {
                        return (
                            <button
                                className="mainButton archiveButton"
                                onClick={() => {
                                    navigate(
                                        `../production/${season.start}-${season.end}/`
                                    )
                                }}
                            >
                                {season.start} <br />
                                {season.end}
                            </button>
                        )
                    })}
                </div>
                <Footer />
            </main>
        </div>
    )
}
