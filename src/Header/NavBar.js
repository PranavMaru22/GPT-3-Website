import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className='nav__container'>
            <h2>GPT-3</h2>
            <div>
                <ul className='nav__list'>
                    <li><a href='#WhatisGPT'>What is GPT?</a></li>
                    <li><a href='#OpenAI'>Open AI</a></li>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Case-studies'>Case Studies</a></li>
                    <li><a href='#Library'>Library</a></li>
                </ul>
            </div>
            <div>
                <a href='#Sign-In'>Sign In</a>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default NavBar