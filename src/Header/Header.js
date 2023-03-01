import React from 'react'
import NavBar from './NavBar'
import HeaderContent from "./HeaderContent"

function Header() {
    return (
        <div className='header__container'>
            <NavBar />
            <HeaderContent />
        </div>
    )
}

export default Header