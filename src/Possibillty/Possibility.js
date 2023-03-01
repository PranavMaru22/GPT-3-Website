import React from 'react'
import "./Possibility.css"
const WOMAN = require("../gpt-3 assets/possibility.png")

function Possibility() {
    return (
        <div>
            <div>
                <img 
                    src={WOMAN}
                    alt="possibility-pic"
                    className='possibility__image'
                />
                <div>
                    <p>Request Early Access to Get Started</p>
                    <h2>The possibilities are beyond your imagination</h2>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p>Request Early Access to Get Started</p>
                </div>
            </div>
            <div>
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