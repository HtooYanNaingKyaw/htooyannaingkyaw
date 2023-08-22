import React from 'react'
// import { Link } from 'react-router-dom'
import './styles.css'

function FollwMe () {
    return(
        <div className="follw-me">
            <ul>
                <li>
                    <a href="https://www.facebook.com/HtooYanNaingKyaw/" target="_blink" rel="noopener noreferrer"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://gitlab.com/NooneNamed" target="_blink" ><i class="fa fa-github" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/htoo-yan-naing-kyaw-830033176/" target="_blink" ><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                </li>
            </ul>
            <p>Follw Me</p>
        </div>
    )
}

export default FollwMe