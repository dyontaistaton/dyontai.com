import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './styles/global';
import {FontFace} from './styles/constants/fonts';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';

ReactDOM.render(
  <React.Fragment>
    <FontFace/>
    <GlobalStyle/>
    <App/>
  </React.Fragment>
  ,document.getElementById('root')
);
serviceWorker.unregister();
