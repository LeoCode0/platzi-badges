import React from 'react'
import './styles/PageError.css'

function PageError (props){
    return (
        <div className="error__hero">
            <div className="error__hero--image">
                <img src="https://img.icons8.com/cotton/256/000000/error--v1.png" alt='Logo error' />
            </div>
            <div className="error__hero--text">
                <h1> {props.error.message} </h1>
            </div>
        </div>
    )
}

export default PageError