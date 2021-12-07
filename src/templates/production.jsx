import * as React from 'react'

export default function Production({ pageContext }) {
    return (
        <div>
            <h1>{pageContext.title}</h1>
            <h1>{pageContext.description}</h1>
        </div>
    )
}
