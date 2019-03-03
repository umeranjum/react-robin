import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
apiKey: "AIzaSyCOqevkUOhj6qtBvzupLDNJf-9rnmADy94",
authDomain: "react-with-firebase-399a0.firebaseapp.com",
databaseURL: "https://react-with-firebase-399a0.firebaseio.com",
projectId: "react-with-firebase-399a0",
storageBucket: "react-with-firebase-399a0.appspot.com",
messagingSenderId: "95720650777"
};

Firebase.initializeApp(config);

export default Firebase