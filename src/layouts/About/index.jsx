import React from 'react'
import Wrapper from '../../components/GeneralWrapper'

import './styles.css'

class About extends React.Component {

    render() {
        return (
            <Wrapper>
                <div className="split-row">
                    <div className="left ls">
                        <div class="about-image">
                            <div class="image overlay-image"></div>
                        </div>
                    </div>
                    <div className="right rg">
                        <div className="about-content">
                            <header>
                                <h2>
                                    <sapn className="title">About Me</sapn> 
                                </h2>
                                <h3>
                                    <span>Hello, I am Htoo Yan Naing Kyaw</span>
                                </h3>
                                <div class="divider divider-1"></div>
                                <p>
                                I am person who finished university with Bachelor Of Computer Science(B.C.Sc) in last year(2012-2018). 
                                I am highly motivated candidate willing to fulfill a challenging job. As my CV, I already gained some work experience. 
                                In a past I learned to deal with the challenge and team member. 
                                I consider myself to be a quick learner, open-minded and responsible. 
                                With my attention to detail and
                                being drive to work hard, I can offer support to your team.
                                </p>
                                <AboutInfo />
                                <div class="divider divider-1"></div>
                                <HorizontalFollwMe />
                            </header>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default About

const AboutInfo = () => {

    return(
        <div className="about-info">
            <ul>
                <li>
                    <i className="fa fa-user" />
                    <p>Htoo Yan Niang Kyaw</p>
                </li>
                <li>
                    <i className="fa fa-map-marker" />
                    <p>Yangon</p>
                </li>
                <li>
                    <i className="fa fa-envelope-o" />
                    <p>saturday.htooyannaingkyaw@gmail.com</p>
                </li>
            </ul>
            <ul>
                <li>
                    <i className="fa fa-calendar-check-o" />
                    <p>1997 & 24 Years</p>
                </li>
                <li>
                    <i className="fa fa-graduation-cap" />
                    <p>Computer Science (B.C.Sc)</p>
                </li>
                <li>
                    <i className="fa fa-mobile" />
                    <p>+997 0513 028</p>
                </li>
            </ul>
        </div>
    )
}

const HorizontalFollwMe = () => {

    return(
        <div className="h-follw-me">
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
        </div>
    )
}