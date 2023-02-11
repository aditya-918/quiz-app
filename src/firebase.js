import firebase from 'firebase'
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDoMIit2holFpH4QH5qcVy76I4wozQlfpk",
    authDomain: "qna-internship.firebaseapp.com",
    projectId: "qna-internship",
    storageBucket: "qna-internship.appspot.com",
    messagingSenderId: "890729580534",
    appId: "1:890729580534:web:603e7c528a82d68cbbe9d7",
    measurementId: "G-HKWZE6X766"
});

  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  export  {db,auth};
  