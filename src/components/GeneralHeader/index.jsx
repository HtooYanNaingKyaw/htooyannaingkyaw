import React from 'react'

import './styles.css'

const GeneralHeader = (props) => {

    return(
        <header className="general-header">
            <div className="title">
                <h2>
                    <span className="title">{props.title}</span>
                </h2>
            </div>
            <h3>
                {props.sub_title}
            </h3>
            <div class="divider divider-1-reverse divider-1-1"></div>
            <div class="divider divider-1-reverse divider-1-2"></div>
        </header>
    )
}

export default GeneralHeader