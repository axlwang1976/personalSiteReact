import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDFUC9SMq7GGA3GNhbWe-9q28I8Vj-G-tI',
  authDomain: 'personalsitereact.firebaseapp.com',
  databaseURL: 'https://personalsitereact.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
