import * as React from 'react'
import Footer from './footer'
import './styles/container.css'
import ProductionMasthead from './productionMasthead'

export default function Container() {
    return (
        <main className="container">
            <ProductionMasthead
                title="doublewide"
                status="Now in production - Learn More"
            />
            <Footer />
        </main>
    )
}
