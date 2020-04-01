import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from './pages/login'
import RegisterPage from './pages/register'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
