import React from 'react'

import './styles.css'
import MiniAbout from '../../components/MiniAbout'

class Home extends React.Component {

    render() {

        return(
            <main className="main-wrapper">
                <MiniAbout />
            </main>
        )
    }
}

export default Home