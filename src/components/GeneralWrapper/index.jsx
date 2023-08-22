import React, { useEffect, useState } from 'react'

import './styles.css'

const Wrapper = (props) => {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 200);
        return () => clearTimeout(timer);
    })
    
    return(
        <div className="general-wrapper" style={{opacity: loading ? 0 : 1}}>
            <section className="section">
                <div className="display-spacing">
                    <div className="wrapper">
                        {props.children}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Wrapper