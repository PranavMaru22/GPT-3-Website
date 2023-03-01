import React from 'react'
import "./FutureInner.css"

function FutureInner({heading,content}) {
    return (
        <div>
            <div>
                <h3>{heading}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default FutureInner