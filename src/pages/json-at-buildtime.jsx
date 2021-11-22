import JSONData from '../content/thisYear.json'
import React from 'react'

const JSONbuildtime = () => (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <h1>{JSONData[0].title}</h1>
        <p>{JSON.stringify(JSONData)}</p>
        {/* <ul>
            {JSONData.content.map((data, index) => {
                return <li key={`content_item_${index}`}>{data.characters}</li>
            })}
        </ul> */}
    </div>
)
export default JSONbuildtime
