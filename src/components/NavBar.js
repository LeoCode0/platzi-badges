import React from 'react'

import './styles/NavBar.css'
import logo from '../images/astronautas.svg'
import { Link } from 'react-router-dom'


class NavBar extends React.Component{
    render(){
        return(
            <div className="NavBar">
                <div className="container-fluid">
                    <Link className="NavBar__brand" to="/">
                        <img className="Navbar__band-logo" src={logo} alt="logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold" >Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar