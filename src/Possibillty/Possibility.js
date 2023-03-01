import React from 'react'
import "./Possibility.css"
const WOMAN = require("../gpt-3 assets/possibility.png")

function Possibility() {
    return (
        <div className='possibility__flex'>
            <div className='possibility__container'>
                <img 
                    src={WOMAN}
                    alt="possibility-pic"
                    className='possibility__image'
                />
                <div className='possibility__content'>
                    <div>
                        <p className='first__para'>Request Early Access to Get Started</p>
                        <h2>The possibilities are beyond your imagination</h2>
                        <p className='second__para'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        <p className='third__para'>Request Early Access to Get Started</p>
                    </div>
                </div>
            </div>
            <div className='request__card'>
                <div>
                    <p>Request Early Access to Get Started</p>
                    <h2>Register today & start exploring the endless possiblities.</h2>
                </div>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Possibility