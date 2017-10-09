/*
get the 'firebase' instance from:

npm install then import

OR

CDN via
<script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
*/

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);


export const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});
export {provider};
export const auth = firebase.auth();

export const isAuthenticated = () => {
  return !!auth.currentUser;
}
