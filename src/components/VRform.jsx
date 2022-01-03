import * as React from 'react'

// import { Helmet } from 'react-helmet'

export default function VRform() {
    React.useEffect(() => {
        if (window?.VR?.SignupForm) {
            new window.VR.SignupForm({
                id: '38482906974664',
                element: 'vr-signup-form-38482906974664',
                endpoint: 'https://vr2.verticalresponse.com/se/',
                embeddable: 'true',
                redirect_url: '',
                submitLabel: 'Submitting...',
                invalidEmailMessage: 'Invalid email address',
                generalErrorMessage: 'An error occurred',
                notFoundMessage: 'Sign up form not found',
                successMessage: 'Success!',
                nonMailableMessage: 'Nonmailable address',
                debug: true,
            })
        }
    }, [])

    return (
        <div className="everything">
            {/* <Helmet>
                <link
                    media="all"
                    rel="stylesheet"
                    type="text/css"
                    href="https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.css"
                />
                <script
                    crossorigin
                    type="text/javascript"
                    src={`https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.js`}
                />
                <title>Volunteer</title>
            </Helmet> */}
            <div className="volunteerForm">
                <h3 className="formHeader">
                    Let us know you want to volunteer!
                </h3>
                <form
                    className="vr-signup-form"
                    id="vr-signup-form-38482906974664"
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
                                        value="Sign Up"
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}
