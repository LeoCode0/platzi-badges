import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'

import App from './components/App'

const container = document.getElementById('app')

ReactDOM.render(<App/>, container)



// const element = document.createElement('h1')
// element.innerText = "Hello, Platzi Badges!"

// const container = document.getElementById('app')

// container.appendChild(element)
// ReactDOM.render(__QUE__, __DONDE__)
// const element = <h1>Hello, Platzi Badges!</h1>
// const jsx = React.createElement(
//     'a', 
//     {href : 'https://platzi.com'},
//     'Ir a platzi'
//  )
// const nombre = 'Fernando'
// const sum = () => 3+3
// const element = React.createElement('h1', {}, `Hola soy ${nombre}`)
// const jsx = <h1>Hola soy,{sum} </h1>