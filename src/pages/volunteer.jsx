import './styles/index.css'
import './styles/volunteer.css'

import * as React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import { Helmet } from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

// import { useEffect } from 'react'

export default function Volunteer() {
    const [isLoaded, setIsLoaded] = useState(false)
    // console.log(isLoaded)
    function showForm() {
        if (isLoaded) {
            console.log(window.VR)
            return (
                <form
                    className="vr-signup-form"
                    id="vr-signup-form-38482906974696"
                >
                    <div className="vr-notice"></div>
                    <div className="vr-field">
                        <ul>
                            <li>
                                <label>
                                    First Name:
                                    <br />
                                    <input
                                        type="text"
                                        name="first_name"
                                        required
                                    />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Last Name: <br />
                                    <input type="text" name="last_name" />
                                </label>
                            </li>
                            <li className="email">
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email_address"
                                        className="emailField"
                                        required
                                    />
                                </label>
                            </li>
                            <li className="submit">
                                <label htmlFor="#">
                                    <input
                                        type="submit"
                                        className="formButton"
                                        onClick={() => {
                                            if (
                                                typeof window.VR !==
                                                    'undefined' &&
                                                typeof window.VR.SignupForm !==
                                                    'undefined'
                                            ) {
                                                new window.VR.SignupForm({
                                                    id: '38482906974664',
                                                    element:
                                                        'vr-signup-form-38482906974664',
                                                    endpoint:
                                                        'https://vr2.verticalresponse.com/se/',
                                                    embeddable: 'true',
                                                    redirect_url: '',
                                                    submitLabel:
                                                        'Submitting...',
                                                    invalidEmailMessage:
                                                        'Invalid email address',
                                                    generalErrorMessage:
                                                        'An error occurred',
                                                    notFoundMessage:
                                                        'Sign up form not found',
                                                    successMessage: 'Success!',
                                                    nonMailableMessage:
                                                        'Nonmailable address',
                                                })
                                            }
                                        }}
                                        value="Sign Up"
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>
                </form>
            )
        } else if (!isLoaded) {
            return <h1>False</h1>
        }
    }

    function checkVR() {
        if (window.VR) {
            setIsLoaded(true)
            clearInterval(lookForVR)
        }
    }

    const lookForVR = setInterval(checkVR)

    return (
        <div className="everything">
            <Helmet>
                <link
                    media="all"
                    rel="stylesheet"
                    type="text/css"
                    href="https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.css"
                />
                <script
                    type="text/javascript"
                    crossOrigin
                    src={`https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.js`}
                />
                <title>Volunteer</title>
            </Helmet>
            <header>
                <Header text="This is the header" />
            </header>
            <div className="container">
                <h1 className="standardPage topElement">Volunteer</h1>
                <div className="card">
                    <h1 className="pageHeader">
                        The best community theater is exactly that. A community.
                    </h1>
                    <p>
                        Our dedicated volunteers are the backbone of Theatre
                        Knoxville Downtown. And we have FUN! Come spend time
                        with other folks who share your passion for making great
                        theater possible.
                    </p>

                    <div className=" volunteers">
                        <div className="smallKnockout lightGrey">
                            <StaticImage
                                src="../images/promotions.jpg"
                                alt="Promotions"
                                placeholder="dominantColor"
                                width="100%"
                                height="auto"
                                className="volImage"
                            />
                            <div className="content">
                                <h2>Promotion</h2>
                                <p className="bodyText">
                                    Help get the word out about Theatre
                                    Knoxville Downtown. Distribute posters to
                                    businesses and public gathering spaces.
                                    Share posts, photos, comments and events on
                                    social media platforms like Facebook,
                                    Twitter, Instagram, arts & entertainment
                                    blogs, and more. Contact traditional media
                                    outlets like newspapers and broadcasters to
                                    boost event coverage.
                                </p>
                            </div>
                        </div>
                        <div className="smallKnockout lightGrey">
                            <StaticImage
                                src="../images/boxOffice.jpg"
                                alt="Promotions"
                                placeholder="dominantColor"
                                width="100%"
                                height="auto"
                                className="volImage"
                            />
                            <div className="content">
                                <h2>Box Office</h2>
                                <p>
                                    Savor the excitement by helping at a
                                    specific performance. Our box office
                                    volunteers: Take tickets Sell concessions
                                    Welcome patrons to the theater and help them
                                    get seated
                                </p>
                            </div>
                        </div>
                        <div className="smallKnockout lightGrey">
                            <StaticImage
                                src="../images/sets.jpg"
                                alt="Promotions"
                                placeholder="dominantColor"
                                width="100%"
                                height="auto"
                                className="volImage"
                            />
                            <div className="content">
                                <h2>Sets, costumes, & props</h2>
                                <p>
                                    Set building may seem daunting. But if you
                                    can swing a hammer, pull the trigger on a
                                    drill, or push a paint brush, we can use
                                    you! Our costume designers always need help
                                    with finding costume pieces, and
                                    occasionally altering or sewing specific
                                    items to get just the right look or fit. And
                                    every show needs its own unique collection
                                    of props, from vintage furniture, to
                                    weapons, to scenic decorations … the list is
                                    endless.
                                </p>
                            </div>
                        </div>
                        <div className="smallKnockout lightGrey">
                            <StaticImage
                                src="../images/fundraising.jpg"
                                alt="Promotions"
                                placeholder="dominantColor"
                                width="100%"
                                height="auto"
                                className="volImage"
                            />
                            <div className="content">
                                <h2>Fundraising</h2>
                                <p>
                                    Operating expenses at our new location are
                                    over 3 times greater than at our old space.
                                    Ticket sales contribute less than half of
                                    the income we need to stay afloat. Help us
                                    raise money through sales of program ads,
                                    outreach to season sponsors and major
                                    donors, and by writing and winning grants.
                                    We need you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardBlank red">
                    <div className="volunteerThanks hidden">
                        <h1 className="formHeader">Hey! Thanks for that!</h1>
                        <p>Getting involved is such a big help.</p>
                    </div>
                    <div className="volunteerForm">
                        <h3 className="formHeader">
                            Let us know you want to volunteer!
                        </h3>
                        {showForm()}
                        {/* <form
                            className="vr-signup-form"
                            id="vr-signup-form-38482906974696"
                        >
                            <div className="vr-notice"></div>
                            <div className="vr-field">
                                <ul>
                                    <li>
                                        <label>
                                            First Name:
                                            <br />
                                            <input
                                                type="text"
                                                name="first_name"
                                                required
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Last Name: <br />
                                            <input
                                                type="text"
                                                name="last_name"
                                            />
                                        </label>
                                    </li>
                                    <li className="email">
                                        <label>
                                            Email:
                                            <input
                                                type="email"
                                                name="email_address"
                                                className="emailField"
                                                required
                                            />
                                        </label>
                                    </li>
                                    <li className="submit">
                                        <label htmlFor="#">
                                            <input
                                                type="submit"
                                                className="formButton"
                                                onClick={() => {
                                                    if (
                                                        typeof VR !==
                                                            'undefined' &&
                                                        typeof VR.SignupForm !==
                                                            'undefined'
                                                    ) {
                                                        new VR.SignupForm({
                                                            id: '38482906974664',
                                                            element:
                                                                'vr-signup-form-38482906974664',
                                                            endpoint:
                                                                'https://vr2.verticalresponse.com/se/',
                                                            embeddable: 'true',
                                                            redirect_url: '',
                                                            submitLabel:
                                                                'Submitting...',
                                                            invalidEmailMessage:
                                                                'Invalid email address',
                                                            generalErrorMessage:
                                                                'An error occurred',
                                                            notFoundMessage:
                                                                'Sign up form not found',
                                                            successMessage:
                                                                'Success!',
                                                            nonMailableMessage:
                                                                'Nonmailable address',
                                                        })
                                                    }
                                                }}
                                                value="Sign Up"
                                            />
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        {/* </form> */}
                        {/* <link media="all" rel="stylesheet" type="text/css" href="https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.css"> */}
                        {/* <script type="text/javascript" src="https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.js"></script>
<script type="text/javascript">if (typeof VR !== "undefined" && typeof VR.SignupForm !== "undefined") { new VR.SignupForm({ id: "38482906974664", element: "vr-signup-form-38482906974664", endpoint: "https://vr2.verticalresponse.com/se/", embeddable: "true", redirect_url: "", submitLabel: "Submitting...", invalidEmailMessage: "Invalid email address", generalErrorMessage: "An error occurred", notFoundMessage: "Sign up form not found", successMessage: "Success!", nonMailableMessage: "Nonmailable address"}); }</script> */}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}
