import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './styles.css'

const SideNav = (props) => {
    return(
        <div className={`app-sidenav ${props.active ? 'nav-active' : ''}`}>
            <div className="sidenav-menu">
                <div className="logo">
                    <Link to="/profile">HYNK</Link>
                </div>
                <button className="close-button" onClick={props.handleSideNav}></button>
                <ul className="sidenav-nav">
                    <li>
                        <NavLink activeClassName="active" to="/profile" onClick={props.handleSideNav}>
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about" onClick={props.handleSideNav}>
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/resume" onClick={props.handleSideNav}>
                            <i class="fa fa-leanpub" aria-hidden="true"></i>
                            <span>Resume</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/service" onClick={props.handleSideNav}>
                            <i class="fa fa-handshake-o" aria-hidden="true"></i>
                            <span>Service</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/portfolio" onClick={props.handleSideNav}>
                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact" onClick={props.handleSideNav}>
                            <i class="fa fa-location-arrow" aria-hidden="true"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <span class="sidenav-close" onClick={props.handleSideNav}></span>
        </div>
    )
}

export default SideNav