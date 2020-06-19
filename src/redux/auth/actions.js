import types from './types';

export const login=({email,password}) => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase=getFirebase();
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user)=>{firebase.analytics().logEvent('login',{method:user.credential.signInMethod})})
      .then(() => {dispatch({type: types.LOGIN_SUCCESS});})
      .catch((err) => {dispatch({type: types.LOGIN_ERROR,err});});
  };
};

export const logout=() => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase=getFirebase();
    firebase.auth().signOut()
    .then(() => {dispatch({type: types.LOGOUT_SUCCESS});});
  };
};

export const register=(credentials,info) => {
  return (dispatch,getState,{getFirebase}) => {
    const firebase=getFirebase();
    const firestore=firebase.firestore();
    if(credentials.password!==credentials.confirmPassword) {dispatch({type: types.REGISTER_ERROR,err: {message: 'Passwords do not match'}});}
    firebase.auth().createUserWithEmailAndPassword(credentials.email,credentials.password)
      .then((result) => {
        return firestore.collection('users').doc(result.user.uid).set({
          ...info
        });
      })
      .then(()=>{firebase.analytics().logEvent('sign_up')})
      .then(() => {dispatch({type: types.REGISTER_SUCCESS});})
      .catch((err) => {dispatch({type: types.REGISTER_ERROR,err});});
  };
};