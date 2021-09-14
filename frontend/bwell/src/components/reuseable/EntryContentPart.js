import React from 'react'

export const EntryContentPart = ({header, text}) => {
    console.log(typeof text)
    const inputData = (typeof text === 'object') ? (
        <ul>
                {text.map(item => <li>{item}</li>)}
        </ul>
    ) : (
        <p>
            {text}
        </p>
    )
    return (
        <article>
            <h6>
                {header}
            </h6>
            {inputData}
        </article>
    )
}
