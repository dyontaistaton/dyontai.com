import React from 'react';
import {BrowserRouter,Route,Switch,} from 'react-router-dom';

import '../../fonts/index.scss';

import Home from '../../pages/home';
import AppWrapper from '../AppWrapper';

import logo from '../../resources/statonfoundation.svg';
import img from '../../resources/placeholder.jpg';

const App=props => (
  <BrowserRouter>
    <AppWrapper
      header={{
        items: [
          {
            title: 'Lorem ipsum',
          },
          {
            title: 'Lorem ipsum',
          },
          {
            title: 'Lorem ipsum'
          },
          {
            title: 'WebBase V.I'
          }
        ],
        logo: logo
      }}
      footer={{
        title: 'WebBase V.I',
        items: [
          {
            title: 'Lorem ipsum',
            items: [
              {
                title: 'WebBase V.I'
              }
            ]
          },
          {
            title: 'Lorem ipsum',
            items:[
              {
                title:'WebBase V.I'
              }
            ]
          },
          {
            title: 'Lorem ipsum',
            items: [
              {
                title: 'WebBase V.I'
              }
            ]
          },
          {
            title: 'Lorem ipsum',
            items: [
              {
                title: 'WebBase V.I'
              }
            ]
          }
        ],
        img:img
      }}
    >
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
    </AppWrapper>
  </BrowserRouter>
);

export default App;