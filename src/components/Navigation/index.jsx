import React from 'react'
import './styles.css'

function HeaderNavigation () {
    return(
        <header className="header-wrapper">
            <div className="header-left">
                <div className="logo">
                    <a href="/">
                        <img src="https://i.pinimg.com/originals/cc/dc/0f/ccdc0fdc8241c0fd1eb434232226324b.png" alt="logo" />
                    </a>
                </div>
            </div>

            <div className="header-right">
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Resume</a>
                        </li>
                        <li>
                            <a href="/">Service</a>
                        </li>
                        <li>
                            <a href="/">Portfolio</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderNavigation