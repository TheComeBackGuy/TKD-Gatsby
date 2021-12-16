export default function VRscript() {
    var countries = [
        { name: 'Afghanistan', value: 'AF' },
        { name: '\u00c5land', value: 'AX' },
        { name: 'Albania', value: 'AL' },
        { name: 'Algeria', value: 'DZ' },
        { name: 'American Samoa', value: 'AS' },
        { name: 'Andorra', value: 'AD' },
        { name: 'Angola', value: 'AO' },
        { name: 'Anguilla', value: 'AI' },
        { name: 'Antarctica', value: 'AQ' },
        { name: 'Antigua and Barbuda', value: 'AG' },
        { name: 'Argentina', value: 'AR' },
        { name: 'Armenia', value: 'AM' },
        { name: 'Aruba', value: 'AW' },
        { name: 'Australia', value: 'AU' },
        { name: 'Austria', value: 'AT' },
        { name: 'Azerbaijan', value: 'AZ' },
        { name: 'Bahamas', value: 'BS' },
        { name: 'Bahrain', value: 'BH' },
        { name: 'Bangladesh', value: 'BD' },
        { name: 'Barbados', value: 'BB' },
        { name: 'Belarus', value: 'BY' },
        { name: 'Belgium', value: 'BE' },
        { name: 'Belize', value: 'BZ' },
        { name: 'Benin', value: 'BJ' },
        { name: 'Bermuda', value: 'BM' },
        { name: 'Bhutan', value: 'BT' },
        { name: 'Bolivia', value: 'BO' },
        { name: 'Bosnia and Herzegovina', value: 'BA' },
        { name: 'Botswana', value: 'BW' },
        { name: 'Bouvet Island', value: 'BV' },
        { name: 'Brazil', value: 'BR' },
        { name: 'British Indian Ocean Territory', value: 'IO' },
        { name: 'Brunei Darussalam', value: 'BN' },
        { name: 'Bulgaria', value: 'BG' },
        { name: 'Burkina Faso', value: 'BF' },
        { name: 'Burundi', value: 'BI' },
        { name: 'Cambodia', value: 'KH' },
        { name: 'Cameroon', value: 'CM' },
        { name: 'Canada', value: 'CA' },
        { name: 'Cape Verde', value: 'CV' },
        { name: 'Cayman Islands', value: 'KY' },
        { name: 'Central African Republic', value: 'CF' },
        { name: 'Chad', value: 'TD' },
        { name: 'Chile', value: 'CL' },
        { name: 'China', value: 'CN' },
        { name: 'Christmas Island', value: 'CX' },
        { name: 'Cocos (Keeling) Islands', value: 'CC' },
        { name: 'Colombia', value: 'CO' },
        { name: 'Comoros', value: 'KM' },
        { name: 'Congo (Brazzaville)', value: 'CG' },
        { name: 'Congo (Kinshasa)', value: 'CD' },
        { name: 'Cook Islands', value: 'CK' },
        { name: 'Costa Rica', value: 'CR' },
        { name: "C\u00f4te d'Ivoire", value: 'CI' },
        { name: 'Croatia', value: 'HR' },
        { name: 'Cuba', value: 'CU' },
        { name: 'Cyprus', value: 'CY' },
        { name: 'Czech Republic', value: 'CZ' },
        { name: 'Denmark', value: 'DK' },
        { name: 'Djibouti', value: 'DJ' },
        { name: 'Dominica', value: 'DM' },
        { name: 'Dominican Republic', value: 'DO' },
        { name: 'Ecuador', value: 'EC' },
        { name: 'Egypt', value: 'EG' },
        { name: 'El Salvador', value: 'SV' },
        { name: 'Equatorial Guinea', value: 'GQ' },
        { name: 'Eritrea', value: 'ER' },
        { name: 'Estonia', value: 'EE' },
        { name: 'Ethiopia', value: 'ET' },
        { name: 'Falkland Islands', value: 'FK' },
        { name: 'Faroe Islands', value: 'FO' },
        { name: 'Fiji', value: 'FJ' },
        { name: 'Finland', value: 'FI' },
        { name: 'France', value: 'FR' },
        { name: 'French Guiana', value: 'GF' },
        { name: 'French Polynesia', value: 'PF' },
        { name: 'French Southern Lands', value: 'TF' },
        { name: 'Gabon', value: 'GA' },
        { name: 'Gambia', value: 'GM' },
        { name: 'Georgia', value: 'GE' },
        { name: 'Germany', value: 'DE' },
        { name: 'Ghana', value: 'GH' },
        { name: 'Gibraltar', value: 'GI' },
        { name: 'Greece', value: 'GR' },
        { name: 'Greenland', value: 'GL' },
        { name: 'Grenada', value: 'GD' },
        { name: 'Guadeloupe', value: 'GP' },
        { name: 'Guam', value: 'GU' },
        { name: 'Guatemala', value: 'GT' },
        { name: 'Guernsey', value: 'GG' },
        { name: 'Guinea', value: 'GN' },
        { name: 'Guinea-Bissau', value: 'GW' },
        { name: 'Guyana', value: 'GY' },
        { name: 'Haiti', value: 'HT' },
        { name: 'Heard and McDonald Islands', value: 'HM' },
        { name: 'Honduras', value: 'HN' },
        { name: 'Hong Kong', value: 'HK' },
        { name: 'Hungary', value: 'HU' },
        { name: 'Iceland', value: 'IS' },
        { name: 'India', value: 'IN' },
        { name: 'Indonesia', value: 'ID' },
        { name: 'Iran', value: 'IR' },
        { name: 'Iraq', value: 'IQ' },
        { name: 'Ireland', value: 'IE' },
        { name: 'Isle of Man', value: 'IM' },
        { name: 'Israel', value: 'IL' },
        { name: 'Italy', value: 'IT' },
        { name: 'Jamaica', value: 'JM' },
        { name: 'Japan', value: 'JP' },
        { name: 'Jersey', value: 'JE' },
        { name: 'Jordan', value: 'JO' },
        { name: 'Kazakhstan', value: 'KZ' },
        { name: 'Kenya', value: 'KE' },
        { name: 'Kiribati', value: 'KI' },
        { name: 'Korea, value: North', value: 'KP' },
        { name: 'Korea, value: South', value: 'KR' },
        { name: 'Kuwait', value: 'KW' },
        { name: 'Kyrgyzstan', value: 'KG' },
        { name: 'Laos', value: 'LA' },
        { name: 'Latvia', value: 'LV' },
        { name: 'Lebanon', value: 'LB' },
        { name: 'Lesotho', value: 'LS' },
        { name: 'Liberia', value: 'LR' },
        { name: 'Libya', value: 'LY' },
        { name: 'Liechtenstein', value: 'LI' },
        { name: 'Lithuania', value: 'LT' },
        { name: 'Luxembourg', value: 'LU' },
        { name: 'Macau', value: 'MO' },
        { name: 'Macedonia', value: 'MK' },
        { name: 'Madagascar', value: 'MG' },
        { name: 'Malawi', value: 'MW' },
        { name: 'Malaysia', value: 'MY' },
        { name: 'Maldives', value: 'MV' },
        { name: 'Mali', value: 'ML' },
        { name: 'Malta', value: 'MT' },
        { name: 'Marshall Islands', value: 'MH' },
        { name: 'Martinique', value: 'MQ' },
        { name: 'Mauritania', value: 'MR' },
        { name: 'Mauritius', value: 'MU' },
        { name: 'Mayotte', value: 'YT' },
        { name: 'Mexico', value: 'MX' },
        { name: 'Micronesia', value: 'FM' },
        { name: 'Moldova', value: 'MD' },
        { name: 'Monaco', value: 'MC' },
        { name: 'Mongolia', value: 'MN' },
        { name: 'Montenegro', value: 'ME' },
        { name: 'Montserrat', value: 'MS' },
        { name: 'Morocco', value: 'MA' },
        { name: 'Mozambique', value: 'MZ' },
        { name: 'Myanmar', value: 'MM' },
        { name: 'Namibia', value: 'NA' },
        { name: 'Nauru', value: 'NR' },
        { name: 'Nepal', value: 'NP' },
        { name: 'Netherlands', value: 'NL' },
        { name: 'Netherlands Antilles', value: 'AN' },
        { name: 'New Caledonia', value: 'NC' },
        { name: 'New Zealand', value: 'NZ' },
        { name: 'Nicaragua', value: 'NI' },
        { name: 'Niger', value: 'NE' },
        { name: 'Nigeria', value: 'NG' },
        { name: 'Niue', value: 'NU' },
        { name: 'Norfolk Island', value: 'NF' },
        { name: 'Northern Mariana Islands', value: 'MP' },
        { name: 'Norway', value: 'NO' },
        { name: 'Oman', value: 'OM' },
        { name: 'Pakistan', value: 'PK' },
        { name: 'Palau', value: 'PW' },
        { name: 'Palestine', value: 'PS' },
        { name: 'Panama', value: 'PA' },
        { name: 'Papua New Guinea', value: 'PG' },
        { name: 'Paraguay', value: 'PY' },
        { name: 'Peru', value: 'PE' },
        { name: 'Philippines', value: 'PH' },
        { name: 'Pitcairn', value: 'PN' },
        { name: 'Poland', value: 'PL' },
        { name: 'Portugal', value: 'PT' },
        { name: 'Puerto Rico', value: 'PR' },
        { name: 'Qatar', value: 'QA' },
        { name: 'Reunion', value: 'RE' },
        { name: 'Romania', value: 'RO' },
        { name: 'Russian Federation', value: 'RU' },
        { name: 'Rwanda', value: 'RW' },
        { name: 'Saint Barth\u00e9lemy', value: 'BL' },
        { name: 'Saint Helena', value: 'SH' },
        { name: 'Saint Kitts and Nevis', value: 'KN' },
        { name: 'Saint Lucia', value: 'LC' },
        { name: 'Saint Martin (French part)', value: 'MF' },
        { name: 'Saint Pierre and Miquelon', value: 'PM' },
        { name: 'Saint Vincent and the Grenadines', value: 'VC' },
        { name: 'Samoa', value: 'WS' },
        { name: 'San Marino', value: 'SM' },
        { name: 'Sao Tome and Principe', value: 'ST' },
        { name: 'Saudi Arabia', value: 'SA' },
        { name: 'Senegal', value: 'SN' },
        { name: 'Serbia', value: 'RS' },
        { name: 'Seychelles', value: 'SC' },
        { name: 'Sierra Leone', value: 'SL' },
        { name: 'Singapore', value: 'SG' },
        { name: 'Slovakia', value: 'SK' },
        { name: 'Slovenia', value: 'SI' },
        { name: 'Solomon Islands', value: 'SB' },
        { name: 'Somalia', value: 'SO' },
        { name: 'South Africa', value: 'ZA' },
        { name: 'South Georgia and South Sandwich Islands', value: 'GS' },
        { name: 'Spain', value: 'ES' },
        { name: 'Sri Lanka', value: 'LK' },
        { name: 'Sudan', value: 'SD' },
        { name: 'Suriname', value: 'SR' },
        { name: 'Svalbard and Jan Mayen Islands', value: 'SJ' },
        { name: 'Swaziland', value: 'SZ' },
        { name: 'Sweden', value: 'SE' },
        { name: 'Switzerland', value: 'CH' },
        { name: 'Syria', value: 'SY' },
        { name: 'Taiwan', value: 'TW' },
        { name: 'Tajikistan', value: 'TJ' },
        { name: 'Tanzania', value: 'TZ' },
        { name: 'Thailand', value: 'TH' },
        { name: 'Timor-Leste', value: 'TL' },
        { name: 'Togo', value: 'TG' },
        { name: 'Tokelau', value: 'TK' },
        { name: 'Tonga', value: 'TO' },
        { name: 'Trinidad and Tobago', value: 'TT' },
        { name: 'Tunisia', value: 'TN' },
        { name: 'Turkey', value: 'TR' },
        { name: 'Turkmenistan', value: 'TM' },
        { name: 'Turks and Caicos Islands', value: 'TC' },
        { name: 'Tuvalu', value: 'TV' },
        { name: 'Uganda', value: 'UG' },
        { name: 'Ukraine', value: 'UA' },
        { name: 'United Arab Emirates', value: 'AE' },
        { name: 'United Kingdom', value: 'GB' },
        { name: 'United States Minor Outlying Islands', value: 'UM' },
        { name: 'United States of America', value: 'US' },
        { name: 'Uruguay', value: 'UY' },
        { name: 'Uzbekistan', value: 'UZ' },
        { name: 'Vanuatu', value: 'VU' },
        { name: 'Vatican City', value: 'VA' },
        { name: 'Venezuela', value: 'VE' },
        { name: 'Vietnam', value: 'VN' },
        { name: 'Virgin Islands, value: British', value: 'VG' },
        { name: 'Virgin Islands, value: U.S.', value: 'VI' },
        { name: 'Wallis and Futuna Islands', value: 'WF' },
        { name: 'Western Sahara', value: 'EH' },
        { name: 'Yemen', value: 'YE' },
        { name: 'Zambia', value: 'ZM' },
        { name: 'Zimbabwe', value: 'ZW' },
    ]

    /**
     * VR.SignupForm()
     *
     * Example:
     *
     * var suf = new VR.SignupForm({
     *   id: 'foobar',
     *   element: 'vr-signup-form'
     * });
     *
     * Options:
     *
     * id                   ID of signup form (required)
     * element              ID of signup form element (required)
     * classPrefix          Prefix for CSS classes (default: 'vr-')
     * debug                Enable debug messages (default: false)
     * endpoint             URL to post to (default: 'https://vr2.verticalresponse.com/s/')
     * generalErrorMessage  Message for general error (default: 'An error occurred')
     * invalidEmailMessage  Message for invalid email (default: 'Invalid email address')
     * notFoundMessage      Message for signup form not found default(: 'Signup form not found')
     * submitLabel          Label of button when in submission state
     * nonMailableMessage   Message for nonmailable address validation error (default: 'Nonmailable address')
     **/
    var signupForm = function (opt) {
        this.options = {
            id: opt.id,
            element: opt.element,
            endpoint: opt.endpoint,
            debug: opt.debug || false,
            submitLabel: opt.submitLabel || 'Submitting...',
            classPrefix: opt.classPrefix || 'vr-',
            invalidEmailMessage:
                opt.invalidEmailMessage || 'Invalid email address',
            generalErrorMessage: opt.generalErrorMessage || 'An error occurred',
            notFoundMessage: opt.notFoundMessage || 'Signup form not found',
            successMessage: opt.successMessage || 'Success!',
            nonMailableMessage: opt.nonMailableMessage || 'Nonmailable address',
        }

        if (!this.options.id) {
            this.error('No signup form ID provided')
        } else if (!this.options.element) {
            this.error('No signup form element provided')
        } else if (!this.options.endpoint) {
            this.error('No signup form endpoint provided')
        } else {
            this.render()
            this.logger('initialized with ' + JSON.stringify(opt))
        }
    }

    signupForm.prototype = {
        emailRegex:
            /^[_a-z0-9\-]+(\.[_a-z0-9\-]+)*@[a-z0-9\-]+(\.[a-z0-9\-]+)*(\.[a-z]{2,4})$/i,

        // Form fields we expect to see
        fieldNames: [
            'birthdate_month',
            'birthdate_year',
            'birthdate_day',
            'company_name',
            'country_code_alpha2',
            'fax',
            'first_name',
            'email_address',
            'extended_address',
            'gender',
            'home_phone',
            'last_name',
            'locality',
            'marital_status',
            'mobile_phone',
            'postal_code',
            'region',
            'street_address',
            'title',
            'website',
            'work_phone',
            'gdpr_consent_given_date',
        ],

        // Store references to form elements
        collectElements: function () {
            this.elements = {
                form: null,
                submit: null,
                fields: [],
            }

            this.elements.form = document.getElementById(this.options.element)
            this.elements.notice = this.elements.form.querySelector(
                'div.' + this.options.classPrefix + 'notice'
            )
            this.elements.emailAddress = this.elements.form.querySelector(
                'input[name=email_address]'
            )
            this.elements.country = this.elements.form.querySelector(
                'select[name=country_code_alpha2]'
            )
            this.elements.submit =
                this.elements.form.querySelector('input[type=submit]')
            this.elements.submit._value = this.elements.submit.value

            this.fieldNames.forEach(
                function (fieldName) {
                    var elm = this.elements.form.querySelector(
                        '*[name=' + fieldName + ']'
                    )

                    if (elm) {
                        this.elements.fields.push(elm)
                    }
                }.bind(this)
            )
        },

        // Insert country codes into country dropdown
        populateCountries: function () {
            if (!this.elements.country) {
                return
            }

            countries.forEach(
                function (country) {
                    var elm = document.createElement('option')
                    elm.setAttribute('value', country.value)
                    elm.innerHTML = country.name
                    this.elements.country.appendChild(elm)
                }.bind(this)
            )
        },

        // Return a URL encoded string of form values
        marshal: function () {
            return this.elements.fields
                .map(
                    function (elm) {
                        var value
                        if (
                            elm.type === 'checkbox' &&
                            elm.name === 'gdpr_consent_given_date' &&
                            elm.checked
                        ) {
                            value = 'checked'
                        } else if (
                            elm.type === 'checkbox' &&
                            elm.name === 'gdpr_consent_given_date' &&
                            !elm.checked
                        ) {
                            value = 'unchecked'
                        } else {
                            value = elm.value
                        }
                        return (
                            encodeURIComponent('contact[' + elm.name + ']') +
                            '=' +
                            encodeURIComponent(value)
                        )
                    }.bind(this)
                )
                .join('&')
        },

        // Render the signup form
        render: function () {
            this.collectElements()
            this.populateCountries()
            this.elements.form.onsubmit = this.submit.bind(this)
        },

        // Reset the submit button label to its cached value
        resetSubmit: function () {
            this.elements.submit.value = this.elements.submit._value
        },

        // Set an error or success message
        setNotice: function (className, message) {
            this.elements.notice.innerHTML = message
            this.elements.notice.className = this.options.classPrefix + 'notice'

            if (className) {
                this.elements.notice.className +=
                    ' ' + this.options.classPrefix + 'notice-' + className
            }
        },

        // Called when the signup form POST failed
        failure: function (message) {
            this.setNotice('failure', message)
            this.resetSubmit()
        },

        // Called when the signup form POSTed successfully
        success: function (xhrResponse) {
            var parsedResponse = {}
            try {
                parsedResponse = JSON.parse(xhrResponse)
            } catch (err) {
                this.logger('Unable to parse response: ' + err)
            } finally {
                if (parsedResponse && parsedResponse.nonmailable === true) {
                    this.setNotice('failure', this.options.nonMailableMessage)
                } else {
                    this.setNotice('success', this.options.successMessage)
                }
                this.elements.form.reset()
                this.resetSubmit()
            }
        },

        // Basic email address validation.  In most scenarios, the input type
        // and "require" attribute of the email address field will provide
        // built-in validation.
        validate: function () {
            if (!this.elements.emailAddress.value.match(this.emailRegex)) {
                this.setNotice('failure', this.options.invalidEmailMessage)
                return false
            }

            return true
        },

        // Submit the signup form
        submit: function () {
            var url = this.options.endpoint + this.options.id + '.json',
                xhr = this.xhr('POST', url),
                data = this.marshal()

            this.logger('CORS POST to ' + url)

            // Bail if this browser does not support CORS
            if (!xhr) {
                this.logger(
                    'This browser does not support CORS.  Sign up not processed.'
                )
                return false
            }

            // Bail if the form does not pass validation
            if (!this.validate()) {
                return false
            }

            // Reset notice message
            this.setNotice('', '')

            // Swap out submit label
            this.elements.submit.value = this.options.submitLabel

            xhr.onload = function () {
                this.logger('Status: ' + xhr.status)

                switch (xhr.status) {
                    case 404:
                        this.logger(
                            'Signup form ID ' + this.options.id + ' not found'
                        )
                        this.failure(this.options.notFoundMessage)
                        break
                    case 200:
                        this.success(xhr.response)
                        break
                    default:
                        this.failure(this.options.generalErrorMessage)
                }
            }.bind(this)

            this.logger('sending ' + data)

            xhr.setRequestHeader(
                'Content-type',
                'application/x-www-form-urlencoded'
            )
            xhr.send(data)

            return false
        },

        // Throw an error
        error: function (msg) {
            throw 'Signup Form Error: ' + msg
        },

        // Log a message if debuggins is enabled
        logger: function (msg) {
            if (this.options.debug) {
                console.debug('SignupForm: ' + msg)
            }
        },

        // Return a CORS-compliant instance of XmlHttpRequest
        xhr: function (method, url) {
            var xhr = new XMLHttpRequest()

            if ('withCredentials' in xhr) {
                xhr.open(method, url, true)
            } else if (typeof XDomainRequest != 'undefined') {
                xhr = new XDomainRequest()
                xhr.open(method, url)
            } else {
                xhr = null
            }

            return xhr
        },
    }

    window.VR = {
        SignupForm: signupForm,
    }
}
