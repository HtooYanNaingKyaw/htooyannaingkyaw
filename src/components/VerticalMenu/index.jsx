import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

const VMenu = () => {

    return(
        <div className="v-menu">
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName="active">
                        <i class="fa fa-home" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume" activeClassName="active">
                        <i class="fa fa-leanpub" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/service" activeClassName="active">
                        <i class="fa fa-handshake-o" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName="active">
                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default VMenu