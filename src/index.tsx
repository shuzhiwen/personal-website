import React from 'react'
import ReactDOM from 'react-dom'
import ParticlesBg from 'particles-bg'
import {App} from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ParticlesBg type="random" bg={true} /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
