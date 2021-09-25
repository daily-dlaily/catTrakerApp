import React from 'react'
import NavItems from './NavItems'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Cat Tracker</a>
                <NavItems/>
            </nav>
        </div>
    )
}

export default NavBar
