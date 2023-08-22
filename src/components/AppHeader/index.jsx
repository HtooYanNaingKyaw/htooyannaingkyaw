import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FollwMe from '../FollwMe'
import SideNav from '../SideMenu'
import VMenu from '../VerticalMenu'

import './styles.css'

const AppHeader = () => {

    const [sideNav, setSideNavActive] = useState(false)

    const handleSideNav = () => {
        setSideNavActive(!sideNav)
    }

    return (
        <header className="app-header">
            <VMenu />
            <FollwMe />
            <SideNav active={sideNav} handleSideNav={handleSideNav} />
            <div className="header-logo">
                <Link to="/profile">HYNK</Link>
            </div>
            <button onClick={handleSideNav} className="menu-button">
                <span></span>
            </button>
        </header>
    )
}

export default AppHeader