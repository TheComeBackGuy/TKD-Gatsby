import * as React from 'react'
import ProductionMasthead from '../components/productionMasthead'
import CovidUpdates from '../components/covidUpdate'
import './styles/home.css'
import './styles/pages.css'

export default function Home() {
    return (
        <main>
            <ProductionMasthead
                title="doublewide"
                status="Now in production - Learn More"
            />
            <CovidUpdates />
        </main>
    )
}
