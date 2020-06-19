import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';

import {Provider,useSelector} from 'react-redux';
import {store} from './redux/index';
import {config} from './config/firebase';
import * as firebase from 'firebase/app';

import {createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider,isLoaded} from "react-redux-firebase";

const rrfProps={
  firebase,
  config:{
    ...config,
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions',
};

function AwaitAuth({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return (<Loading/>);
  return children;
};

ReactDOM.render(
  <Provider>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AwaitAuth>
        <App/>
      </AwaitAuth>
    </ReactReduxFirebaseProvider>
  </Provider>
  ,document.getElementById('root')
);
serviceWorker.unregister();
