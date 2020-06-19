import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/home';

export default (props)=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}