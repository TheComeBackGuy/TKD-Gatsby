import './styles/pages.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import { StaticImage } from 'gatsby-plugin-image'

export default function Auditions() {
    return (
        <body className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">Auditions</h1>
                <article className="card">
                    <h1>General Requirements</h1>
                    <p>
                        No monologue is necessary. The audition will consist of
                        cold readings from the script in a group enviroment.
                    </p>
                    <p>
                        A headshot and resume are recommended but not required.
                    </p>
                    <p>
                        Please bring a detailed list of conflicts for the next 3
                        months.
                    </p>
                </article>
                <article className="card">
                    <StaticImage
                        src="../images/OfficeHours_website_banner.jpg"
                        alt="Office Hours placeholder"
                        description="The words Office Hours and a turquoise background."
                    />
                    <p>
                        Our next production is Office Hours by Norm
                        Foster.Auditions will be anounced here and on our social
                        media accounts when auditions begin.
                    </p>
                </article>
                <Footer />
            </main>
        </body>
    )
}
