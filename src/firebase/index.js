import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUerh9RCk1XGu0bVSQmgbABjav1l48obY",
    authDomain: "softwave-7eb75.firebaseapp.com",
    projectId: "softwave-7eb75",
    storageBucket: "softwave-7eb75.appspot.com",
    messagingSenderId: "379001326120",
    appId: "1:379001326120:web:e795283e10dc095fda431d",
    measurementId: "G-K3WKEB2JST"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export {storage, firebase as default};