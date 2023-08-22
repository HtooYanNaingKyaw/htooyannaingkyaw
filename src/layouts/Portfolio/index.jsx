import React, { useState } from 'react'
import GeneralHeader from '../../components/GeneralHeader'
import Wrapper from '../../components/GeneralWrapper'
import Tabs from '../../components/Tabs'

import './styles.css'

// Tempoary Import
import admin from '../../assests/images/Works/MMDPAdminPanel.png'
import endUser from '../../assests/images/Works/MMDPendUser.png'
import MsModal from '../../components/Modal'

const Works = [
    {
        label: "All Works",
        data: [
            {
                id: 1,
                title: "MMDP Online Shopping End User Web App",
                category: "Website",
                imageLink: endUser,
                detail: {
                    title: "MMDP Online Shopping End User Web App",
                    type: "Website",
                    role: "Frond-End Developer",
                    duration: "March 2020 - Nov 2020",
                    teamSize: 5,
                    link: "https://www.mmdigitalplatform.com/mmdp"
                }
            },
            {
                id: 2,
                title: "MMDP Online Shopping Admin",
                category: "Website",
                imageLink: admin,
                detail: {
                    title: "MMDP Online Shopping Admin",
                    type: "Website",
                    role: "Frond-End Developer",
                    duration: "March 2020 - Nov 2020",
                    teamSize: 5,
                    link: "https://www.mmdigitalplatform.com"
                }
            },
        ]
    },
    {
        label: "Websites",
        data: [
            {
                id: 1,
                title: "MMDP Online Shopping End User Web App",
                category: "Website",
                imageLink: endUser,
                detail: {
                    title: "MMDP Online Shopping End User Web App",
                    type: "Website",
                    role: "Frond-End Developer",
                    duration: "March 2020 - Nov 2020",
                    teamSize: 5,
                    link: "https://www.mmdigitalplatform.com/mmdp"
                }
            },
            {
                id: 2,
                title: "MMDP Online Shopping Admin",
                category: "Website",
                imageLink: admin,
                detail: {
                    title: "MMDP Online Shopping Admin",
                    type: "Website",
                    role: "Frond-End Developer",
                    duration: "March 2020 - Nov 2020",
                    teamSize: 5,
                    link: "https://www.mmdigitalplatform.com"
                }
            }
        ]
    },
]

function Portfolio() {

    const [showModal, setShowModal] = useState(false)
    const [pjDetail, setPjDetail] = useState({})

    const setDataAndOpenModal = (data) => {
        setPjDetail(data)
        setShowModal(true)
    }

    return (
        <>
        <Wrapper>
            <GeneralHeader title="PORTFOLIO" sub_title="Let's See My Work" />

            <Tabs>
                {Works && Works.length > 0 ?
                    Works.map(work => (
                        <div aria-label={work.label} label={work.label}>
                            {work.data && work.data.length > 0 ?
                                <div className="project-wrapper">
                                    {work.data.map(project => (
                                        <div key={project.id} className="project">
                                            <div className="project-photo-wrapper" >
                                                <img className="project-photo" src={project.imageLink} alt={project.title} />
                                            </div>
                                            <div className="content">
                                                <h3>{project.title}</h3>
                                                <span>{project.category}</span>
                                                <button onClick={() => setDataAndOpenModal(project.detail)}><i className="fa fa-eye" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                : ""}
                        </div>
                    ))
                    : ""}
            </Tabs>
        </Wrapper>
        
        <MsModal close={setShowModal} show={showModal}>
            {pjDetail && 
                <div className="project-detail">
                    <h2>{pjDetail.title}</h2>
                    <div style={{position: "relative", height: "30px"}}>
                    {pjDetail.type && <span className="type">{pjDetail.type}</span>}
                    </div>
                    <ul className="detail">
                        <li>
                            <span className="mini-title">Role</span>
                            <span className="content">{pjDetail.role}</span>
                        </li>
                        {pjDetail.duration && <li>
                            <span className="mini-title">Duration</span>
                            <span className="content">{pjDetail.duration}</span>
                        </li>}
                        {pjDetail.teamSize &&<li>
                            <span className="mini-title">Team Size</span>
                            <span className="content">{pjDetail.teamSize}</span>
                        </li>}
                    </ul>
                    {pjDetail.link &&
                        <div className="btn-container">
                            <a href={pjDetail.link} target="_blink"><button className="extenral-link"><i className="fa fa-external-link" aria-hidden="true"></i></button></a>
                        </div>
                    }
                </div>
            }
        </MsModal>
        </>
    )
}

export default Portfolio