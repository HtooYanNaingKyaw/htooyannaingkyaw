import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

function MsModal(props) {

    const { children, title, show } = props
    console.log(title)
    let className = ""
    if(props.show === true) {
        className = 'ms-modal-container show'
    } else {
        className = 'ms-modal-container out'
    }
    
    return (
        <div className={className}>
            <div className="modal-background">
                <div className="ms-modal">
                    <div className={`ms-modal-content`}>
                        <div className="modal-header">
                            <span class="close" onClick={() => props.close(false)}>&times;</span>
                            <h2>{title}</h2>
                        </div>
                        {children}

                        
                    </div>
                    <svg class="modal-svg" width="100%" height="100%">
                        <rect x="0" y="0" fill="none" width="100%" height="100%" rx="3" ry="3"></rect>
                    </svg>
                </div>
            </div>
        </div>
    )
}

MsModal.prototype = {
    children: PropTypes.instanceOf(Array).isRequired
}

export default MsModal