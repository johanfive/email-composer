import firebase from 'firebase';
//______________________________________________________________________________


const config = {
    apiKey: "AIzaSyAZ-nncUPTo_5tl4fATyKA63TiikFvHMXE",
    authDomain: "compoz-6c03b.firebaseapp.com",
    databaseURL: "https://compoz-6c03b.firebaseio.com"
};

firebase.initializeApp(config);

const database = firebase.database();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export {provider};

export const auth = firebase.auth();


// This only gets called by components that are only mounted when the user is loggedin
let db;
auth.onAuthStateChanged(user => {
    if (user) {
        db = database.ref().child('users').child(user.uid);
    }
});
export {db};
