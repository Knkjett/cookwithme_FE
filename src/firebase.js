import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMhB5wfl8lVzr9oY4t6bouXnQFCwVUtzg",
    authDomain: "tinykitchen-eb695.firebaseapp.com",
    databaseURL: "https://tinykitchen-eb695.firebaseio.com",
    projectId: "tinykitchen-eb695",
    storageBucket: "tinykitchen-eb695.appspot.com",
    messagingSenderId: "411065010962",
    //appId: "1:411065010962:web:3d6063ed5bd1b2c1"
  };


app.initializeApp(config);

export default app;



