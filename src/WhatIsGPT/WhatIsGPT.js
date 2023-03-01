import React from 'react'
import "./WhatIsGPT.css"
import Details from "./Details.js"
const GOOGLE = require("../gpt-3 assets/google.png")
const SLACK = require("../gpt-3 assets/slack.png")
const ATLASSIAN = require("../gpt-3 assets/atlassian.png")
const DROPBOX = require("../gpt-3 assets/dropbox.png")
const SHOPIFY = require("../gpt-3 assets/shopify.png")

function WhatIsGPT() {
  return (
    <div className='GPT__container'>
        <div className='company__logos'>
            <img 
                src={GOOGLE}
                alt='GOOGLE--logo'
                className='logo'
            />
            <img 
                src={SLACK}
                alt='SLACK--logo'
                className='logo'
            />
            <img 
                src={ATLASSIAN}
                alt='ATLASSIAN--logo'
                className='logo'
            />
            <img 
                src={DROPBOX}
                alt='DROPBOX--logo'
                className='logo'
            />
            <img 
                src={SHOPIFY}
                alt='SHOPIFY--logo'
                className='logo'
            />
        </div>
        <div>
            <Details />
        </div>
    </div>
  )
}

export default WhatIsGPT