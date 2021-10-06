import React from 'react'
import logo from '../../images/ETEA-final-logo.png'
import './HomePage.css'
const HomePage = () => {
    return (
        <div className='home-page'>
            <div>
                {/* <h1 className='home-page'>እንኳን ደህና መጡ<br />የኢትዮጵያውያን ትራንዚት ሠራተኞች ማኅበር</h1> */}
                <img src={logo} />
            </div>
        </div>
    )
}

export default HomePage
