import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'API KEY',
  authDomain: 'financ-356f0.firebaseapp.com',
  databaseURL: 'https://financ-356f0.firebaseio.com',
  projectId: 'financ-356f0',
  storageBucket: 'financ-356f0.appspot.com',
  messagingSenderId: '492805534290',
  appId: '1:492805534290:ios:f672c9a05777c302e6a58b',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
