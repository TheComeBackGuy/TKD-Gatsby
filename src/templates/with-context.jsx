import * as React from 'react'

export default function WithContext({ pageContext }) {
    return (
        <section>
            <h1>{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </section>
    )
}
