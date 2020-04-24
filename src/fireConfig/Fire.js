import firebase from 'firebase'; 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDqf1Wk_rP9CElBgbZSHZjZ3ZA6j0e-4fU",
    authDomain: "grouptodo-ec212.firebaseapp.com",
    databaseURL: "https://grouptodo-ec212.firebaseio.com",
    projectId: "grouptodo-ec212",
    storageBucket: "grouptodo-ec212.appspot.com",
    messagingSenderId: "585212702325",
    appId: "1:585212702325:web:6fbdd7821a684dd6a9923c"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire; 
