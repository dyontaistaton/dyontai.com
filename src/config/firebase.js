import * as firebase from 'firebase/app';
import 'firebase/performance';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

export const config={
  // insert config
};
firebase.initializeApp(config);
export const analytics=firebase.analytics();
export const performance=firebase.performance();
export const auth=firebase.auth();

auth.onIdTokenChanged(user=>{
  if(!user){return}
  analytics.setUserId(user.uid);
})

export default firebase;