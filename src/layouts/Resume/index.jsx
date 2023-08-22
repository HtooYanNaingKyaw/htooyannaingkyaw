import React from 'react'
import GeneralHeader from '../../components/GeneralHeader'
import Wrapper from '../../components/GeneralWrapper'
import LineProgressBar from '../../components/ProgressLine'

import './styles.css'

class Resume extends React.Component {

    render() {

        return(
            <Wrapper>
                <GeneralHeader title="RESUME" sub_title="Education & Experience" />

                
                <div className="split-row">
                    <div className="left">
                        <div className="edu">
                            <h4 className="title">Education</h4>

                            <ul>
                                <li>
                                    <div className="item">
                                        <div className="item-head">
                                            <div className="icon">
                                                <i class="fa fa-university" aria-hidden="true"></i>
                                            </div>
                                            <h5>Computer Science (B.C.Sc)</h5>
                                            <h6>Pyay Computer University Pyay (2013 - 2018)</h6>
                                        </div>
                                        <div className="item-body">
                                            <p></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="exp">
                            <h4 className="title">Experience</h4>
                            <ul>
                                <li>
                                    <div className="item">
                                        <div className="item-head">
                                            <div className="icon">
                                                <i class="fa fa-briefcase" aria-hidden="true"></i>
                                            </div>
                                            <h5>Internship Web Developer</h5>
                                            <h6>Stalwarts Company L.td (04/2018 – 07/2018)</h6>
                                        </div>
                                        <div className="item-body">
                                            <p></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item-head">
                                            <div className="icon">
                                                <i class="fa fa-briefcase" aria-hidden="true"></i>
                                            </div>
                                            <h5>Front-End Web Developer</h5>
                                            <h6>Freelance (2019 - Present)</h6>
                                        </div>
                                        <div className="item-body">
                                            <p></p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item-head">
                                            <div className="icon">
                                                <i class="fa fa-briefcase" aria-hidden="true"></i>
                                            </div>
                                            <h5>Back-End Web Developer</h5>
                                            <h6>StudioAMK Co.ltd (2019 - 2021)</h6>
                                        </div>
                                    </div>
                                    <div className="item-body">
                                        <p></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Skills />
            </Wrapper>
        )
    }
}

export default Resume


const Skills = () => {

    return(
        <div className="skill-wrapper">
            <div className="skill-item">
                <LineProgressBar title="HTML" percent="70" />
            </div>
            <div className="skill-item">
                <LineProgressBar title="CSS" percent="70" />
            </div>
            <div className="skill-item">
                <LineProgressBar title="Javascript" percent="85" />
            </div>
            <div className="skill-item">
                <LineProgressBar title="Node JS" percent="70" />
            </div>
            <div className="skill-item">
                <LineProgressBar title="React" percent="75" />
            </div>
            <div className="skill-item">
                <LineProgressBar title="Vue" percent="30" />
            </div>
            <div className="skill-item">
                <LineProgressBar title="Bootstrap" percent="70" />
            </div>
            <div className="skill-item">
                <LineProgressBar title="Firebase" percent="50" />
            </div>
        </div>
    )
}