var firebaseConfig = {
  apiKey: "AIzaSyAKqtCGYq7H79qG2gGNLhss17YJfrHGwAU",
  authDomain: "blog-ca06c.firebaseapp.com",
  projectId: "blog-ca06c",
  storageBucket: "blog-ca06c.appspot.com",
  messagingSenderId: "475935502662",
  appId: "1:475935502662:web:95be137d647da7c648f547"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// det er denne dere bruker når dere skal hente data (app.content.get(), etc)
const app = flamelink({
  firebaseApp,
  dbType: 'cf' // cloud firestore
});