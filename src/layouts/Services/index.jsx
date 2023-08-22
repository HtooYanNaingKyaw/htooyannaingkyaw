import React from 'react'
import GeneralHeader from '../../components/GeneralHeader'
import Wrapper from '../../components/GeneralWrapper'

import './styles.css'

class Service extends React.Component {

    render() {

        return(
            <Wrapper>
                <GeneralHeader title="SERVICES" sub_title="Let's See My Services" />
                
                <div className="service-wrapper">
                    <div className="service">
                        <div className="content">
                            <div className="service-icon">
                                <i className="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <h4>Web Development</h4>
                            <p> - </p>
                        </div>
                    </div>

                    
                    <div className="service">
                        <div className="content">
                            <div className="service-icon">
                                <i className="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <h4>Web Design</h4>
                            <p> - </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Service