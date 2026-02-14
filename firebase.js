// 🔴 PUT YOUR REAL FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

// ⭐ Initialize Firebase ONLY ONCE
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ⭐ Create auth object
const auth = firebase.auth();
