import * as React from 'react'

export default function FaceBook(props) {
    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width={props.width}
            height={props.width}
            viewBox="0 0 25.49 49.029"
            style="enable-background:new 0 0 25.49 49.029;"
            xml:space="preserve"
        >
            <path
                fill={props.color}
                d="M20.974,7.648c1.512,0,4.33,0,4.33,0V0.394h-4.02c-12.251,0-13.317,6.784-13.317,10.177v7.725H0.243
	v7.537h7.724v22.805h8.482V25.833h7.725l1.13-7.537H16.45v-7.725C16.449,9.184,18.342,7.648,20.974,7.648z"
            />
        </svg>
    )
}
