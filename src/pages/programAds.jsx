import './styles/index.css'
import './styles/programAds.css'

import * as React from 'react'

import AdInfo from '../content/programAds.json'
import Footer from '../components/footer'
import Header from '../components/header'

export default function ProgramAds(props) {
    console.log(AdInfo)
    return (
        <div className="everything">
            <header>
                <Header text="This is the header" />
            </header>
            <main className="container">
                <h1 className="standardPage">Program Ads</h1>

                <div className="card">
                    <h1>Levels of support</h1>
                    <p>
                        Theatre Knoxville Downtown is a 501(c)(3) organization
                        that has been operating continuously in Knoxville since
                        1976. We produce 8 full-length shows each season, with
                        11 performances of each. With a capacity of 100 people
                        each night, that’s up to 1100 patrons for each show!
                        Purchasing an ad in our program shows your support for a
                        local, all-volunteer organization dedicated to producing
                        a high-quality theater experience on a consistent and
                        sustained basis.
                    </p>
                    <h3 className="adHeader">{AdInfo[0].name}</h3>
                    <div className="adContainer">
                        {AdInfo[0].content.map((ad, index) => (
                            <div
                                className="adKnockout lightGrey"
                                key={`content_item_${index}`}
                            >
                                <h3 className="adLevel">{ad.adType}</h3>
                                <h3 className="adPrice">{ad.adPrice}</h3>
                                <ul className="adBenefits">
                                    {ad.adBenefits.map((benefit, indexKey) => {
                                        return (
                                            <li
                                                key={`content_item_${indexKey}`}
                                            >
                                                {benefit}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <h3 className="adHeader">{AdInfo[1].name}</h3>

                    <div className="adContainer">
                        {AdInfo[1].content.map((ad, index) => (
                            <div
                                className="adKnockout lightGrey"
                                key={`content_item_${index}`}
                            >
                                <h3 className="adLevel">{ad.adType}</h3>
                                <h3 className="adPrice">{ad.adPrice}</h3>
                                <ul className="adBenefits">
                                    {ad.adBenefits.map((benefit, indexKey) => {
                                        return (
                                            <li
                                                key={`content_item_${indexKey}`}
                                            >
                                                {benefit}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <h3 className="adHeader">{AdInfo[2].name}</h3>

                    <div className="adContainer">
                        {AdInfo[2].content.map((ad, index) => (
                            <div
                                className="adKnockout lightGrey"
                                key={`content_item_${index}`}
                            >
                                <h3 className="adLevel">{ad.adType}</h3>
                                <h3 className="adPrice">{ad.adPrice}</h3>
                                <ul className="adBenefits">
                                    {ad.adBenefits.map((benefit, indexKey) => {
                                        return (
                                            <li
                                                key={`content_item_${indexKey}`}
                                            >
                                                {benefit}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    )
}
