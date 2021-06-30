import firebase from "firebase"


/*configuration keys for ourmessaging app*/
const firebaseConfig = {
    apiKey: "AIzaSyBFP8Iac_r3RVlvqt2WLRA6UHyR0X7XMO0",
    authDomain: "messaging-application-7cd48.firebaseapp.com",
    projectId: "messaging-application-7cd48",
    storageBucket: "messaging-application-7cd48.appspot.com",
    messagingSenderId: "744625992127",
    appId: "1:744625992127:web:d842a51f4e74e97782710a",
    measurementId: "G-3KMRMRK1HS"
};
//code to initialise app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//invoking our database
const db = firebaseApp.firestore();

//invoking our authentication service
const auth = firebaseApp.auth();

//google auth providersetup
const provider = new firebase.auth.GoogleAuthProvider();
//exportingour instances so that we can usethem any where in our project
export { auth, provider }
export default db;