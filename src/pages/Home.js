import React from 'react'

import './styles/Home.css'
import astronautas from '../images/astronautas-home.svg'
import logoConf from '../images/logo-conf.svg'
import { Link } from 'react-router-dom'

function Home () {
    return (
        <div className="home__hero">
            <div className="home__hero--left">
                <div className="hero__left--image">
                    <img src={logoConf} alt=""/>
                </div>
                <div className="hero__left--text">
                    <h1>PRINT YOUR BADGES</h1>
                    <p>The easiest way to manage your conference</p>
                    <Link to='/badges' className="btn btn-primary" >Start Now</Link>
                </div>
            </div>
            <div className="homre__hero--image">
                <img src={astronautas} alt=""/>
            </div>
        </div>
    )
}

export default Home