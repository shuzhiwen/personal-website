import React from 'react'
import ReactDOM from 'react-dom'
import microApp from '@micro-zoe/micro-app'
import {App} from './App'
import './index.css'

microApp.start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
