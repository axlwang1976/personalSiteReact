import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'xxx',
  authDomain: 'personalsitereact.firebaseapp.com',
  databaseURL: 'https://personalsitereact.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
