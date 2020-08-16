import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDnCcUv4IViJZJByijl8joJCl1pYLNnRhA',
  authDomain: 'carpede-main.firebaseapp.com',
  databaseURL: 'https://carpede-main.firebaseio.com',
  projectId: 'carpede-main',
  storageBucket: 'carpede-main.appspot.com',
  messagingSenderId: '272447631228',
  appId: '1:272447631228:web:0e687390931d181b527ef9',
  measurementId: 'G-7V5Y0C1CX1'
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
