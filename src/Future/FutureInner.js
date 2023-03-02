import React from 'react'
import "./FutureInner.css"

function FutureInner({heading,content}) {
    return (
        <div>
            <div className='future__inner__container'>
                <div>
                    <div className='linear__border'></div>
                    <h3>{heading}</h3>
                </div>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default FutureInner