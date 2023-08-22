import React from 'react'

import './styles.css'

const LineProgressBar = (props) => {
    return(
        <div className={`progress ${props.display === 'center' ? 'display-center' : ""}`}>
            {props.title ? <>
                <h5 className="icon">
                    <span className="title">{props.title}</span>
                </h5>
                <span className="progress-count">% {props.percent}</span>
            </> : "" }
            <div className={`progress-line`}>
                <div className="progress-bar" min='0' max={`${props.percent}`} style={{width: `${props.percent}%`}}></div>
            </div>
        </div>
    )
}

export default LineProgressBar