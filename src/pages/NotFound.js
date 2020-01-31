import React from 'react'

import './styles/NotFound.css'

function NotFound (){
    return (
        <div className="NotFound__hero">
            <div className="NotFound__hero--image">
                <img src="https://static.platzi.com/static/images/error/img404.a1003ad86732.png" alt=""/>
            </div>
            <div className="NotFound__Hero--text">
                <h1>Error 4040: Not Found</h1>
            </div>
        </div>
    )
}

export default NotFound