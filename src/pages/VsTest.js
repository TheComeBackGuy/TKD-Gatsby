// import Helmet from 'react-helmet'
// import React from 'react'

// export default function verticalResponse() {
//     return (
//         <div>
//             <Helmet>
//                 <title>Just a test</title>
//             </Helmet>

//             <h2>Become a TKD Volunteer</h2>

//             <form class="vr-signup-form" id="vr-signup-form-38482906974664">
//                 <div class="et_pb_newsletter_fields">
//                     <table width="100%">
//                         <tr>
//                             <td colspan="2">
//                                 <input
//                                     width="100%"
//                                     class="input"
//                                     type="email"
//                                     name="email_address"
//                                     required
//                                     placeholder="Email address (required)"
//                                 />
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <input
//                                     width="100%"
//                                     class="input"
//                                     type="text"
//                                     name="first_name"
//                                     placeholder="First Name"
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     class="input"
//                                     type="text"
//                                     name="last_name"
//                                     placeholder="Last Name"
//                                 />
//                             </td>
//                         </tr>
//                     </table>
//                     <div class="vr-submit">
//                         <div class="vr-notice"></div>
//                         <input type="submit" value="Sign Up" />
//                     </div>
//                 </div>
//             </form>
//             <link
//                 media="all"
//                 rel="stylesheet"
//                 type="text/css"
//                 href="https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.css"
//             />
//             <script
//                 type="text/javascript"
//                 src="https://vr2.verticalresponse.com/signup_forms/signup_forms.embedded-2.js"
//             ></script>
//             <script type="text/javascript">{
//                 if(typeof VR != "undefined" && typeof VR.SignupForm !=
//                 "undefined"){                   new VR.SignupForm({
//                         id: '38482906974664',
//                         element: 'vr-signup-form-38482906974664',
//                         endpoint: 'https://vr2.verticalresponse.com/se/',
//                         embeddable: 'true',
//                         redirect_url: '',
//                         submitLabel: 'Submitting...',
//                         invalidEmailMessage: 'Invalid email address',
//                         generalErrorMessage: 'An error occurred',
//                         notFoundMessage: 'Sign up form not found',
//                         successMessage: 'Success!',
//                         nonMailableMessage: 'Nonmailable address',
//                     })}

//                 }
//             </script>
//         </div>
//     )
// }
