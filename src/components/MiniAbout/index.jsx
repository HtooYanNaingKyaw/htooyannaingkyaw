import React from 'react'
import './styles.css'
import profileImg from '../../assests/images/profile.jpg'
import { Link } from 'react-router-dom'

function MiniAbout () {
    return(
        <section className="display-center">
            <div className="about-wrapper">
                <div className="left">
                    <p>
                        <span className="title">
                            I'm Htoo Yan Naing Kyaw
                        </span>
                    </p>
                    <h1>
                        I'm a Web Developer <br />
                        Thank for visiting here!!
                    </h1>
                    <Link to="/portfolio"><button>My Portfolio</button></Link>
                </div>
                <div className="right">
                    <div className="profile-img">
                        <img alt="profile" src={profileImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniAbout