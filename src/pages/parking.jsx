import './styles/index.css'
import './styles/parking.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import Pin from '../images/svg/pin.jsx'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby-link'

export default function Parking() {
    function mapIt() {
        navigate('https://goo.gl/maps/1K2feQ9H3HGfXuSg9')
    }

    return (
        <div className="everything">
            <header>
                <Header />
            </header>
            <main className="container">
                <h1 className="standardPage topElement">Parking</h1>
                <div className="card">
                    <div className="mapsLink">
                        <Pin />
                        <button className="mainButton" onClick={mapIt}>
                            Map us
                        </button>
                    </div>
                    <div className="parking">
                        <p className="metered">
                            Metered parking is available on all of the streets
                            around the theater. The meters are FREE evenings
                            after 6 pm and all day Sunday. Parking is also
                            available in several garages nearby.
                        </p>
                        <div className="knockoutBlank lightGrey garage">
                            <h3>State Street Garage</h3>
                            <cite>500 State St, Knoxville, TN 37902</cite>
                            <StaticImage
                                className="parkingImage"
                                src="../images/state-street-parking.jpg"
                                alt="State Street Parking"
                                description="A multi-level parking building"
                            />

                            <p>
                                State Street garage, 2 blocks north of the
                                theater on S. Central St. This garage is FREE
                                evenings and weekends.
                            </p>
                        </div>
                        <div className="knockoutBlank lightGrey garage">
                            <h3>First Horizon Bank Garage</h3>
                            <cite>800 S Gay St, Knoxville, TN 37929</cite>
                            <StaticImage
                                className="parkingImage"
                                src="../images/first-horizon-bank.jpg"
                                alt="First Horizon Bank"
                                description="A tall building in the middle of downtown Knoxville"
                            />
                            <p>
                                First Horizon Bank garage, 1 block west of the
                                theater on Cumberland Ave. This garage offers
                                discount rates on evenings and weekends.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}
