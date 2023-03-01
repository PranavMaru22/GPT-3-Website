import React from 'react'
import "./HeaderContent.css"
const Hero = require("../gpt-3 assets/ai.png")
const PEOPLE = require("../gpt-3 assets/people.png")

function HeaderContent() {
    return (
        <div className='header__content__container'>
            <div className='header__content'>
                <h1>Let’s Build Something amazing with  GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='mixed__input'>
                    <div className='input__container'>
                        <input
                            className='input__txt'
                            type={Text} 
                            placeholder={`Your Email Address`}
                        />
                        <button className='start__btn'>Get Started</button>
                    </div>
                    <div className='people__container'>
                        <img 
                            src={PEOPLE}
                            alt="peoples--phottos"
                            className='people__img'
                        />
                        <span>1,600 people requested access a visit in last 24 hours</span>
                    </div>
                </div>
            </div>
            <div className='header__image'>
                <img
                    src={Hero}
                    alt="hero--png"
                    className='hero__image'
                />
            </div>
        </div>
    )
}

export default HeaderContent