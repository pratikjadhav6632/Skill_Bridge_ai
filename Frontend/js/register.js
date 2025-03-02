import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCLK8WZHbOKKhe4WRwvXewqHolHOQjX39Y",
    authDomain: "skill-bridge-d102b.firebaseapp.com",
    projectId: "skill-bridge-d102b",
    storageBucket: "skill-bridge-d102b.firebasestorage.app",
    messagingSenderId: "321096933150",
    appId: "1:321096933150:web:76532bb68c0a10c46bf30f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup
const signupButton = document.getElementById('signup');
if (signupButton) {
    signupButton.addEventListener('click', function (event) {
        event.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const username = document.getElementById('signupUsername').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setDoc(doc(db, "users", user.uid), {
                    username: username,
                    email: email,
                }).then(() => {
                    alert("Signup Successful");
                    window.location.href = "index.html";
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Signup Error: " + errorMessage);
                console.error("Signup Error:", errorCode, errorMessage);
            });
    });
}

// Login
const loginButton = document.getElementById('login');
if (loginButton) {
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Login Successful");
                window.location.href = "index.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Login Error: " + errorMessage);
                console.error("Login Error:", errorCode, errorMessage);
            });
    });
}