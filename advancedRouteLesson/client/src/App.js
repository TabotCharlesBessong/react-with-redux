import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import {Header} from './components'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>Hello world</h1>
        <Switch>
          <Route path='/' component={Header} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
