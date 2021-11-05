import * as React from 'react'
import './styles/index.css'
import '../components/styles/header.css'
import Container from '../components/container'
import Header from '../components/header'
import ProductionMasthead from '../components/productionMasthead'
import CovidWarning from '../components/covidWarning'

export default function Index() {
    return (
        <body className="everything">
            <header>
                {/* <CovidWarning /> */}
                <Header text="This is the header" />
            </header>

            <Container />
        </body>
    )
}
