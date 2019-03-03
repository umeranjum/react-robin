import app from 'firebase/app'
import 'firebase/auth'

// Initialize Firebase
var config = {
apiKey: "AIzaSyCOqevkUOhj6qtBvzupLDNJf-9rnmADy94",
authDomain: "react-with-firebase-399a0.firebaseapp.com",
databaseURL: "https://react-with-firebase-399a0.firebaseio.com",
projectId: "react-with-firebase-399a0",
storageBucket: "react-with-firebase-399a0.appspot.com",
messagingSenderId: "95720650777"
};

class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

  }

export default Firebase