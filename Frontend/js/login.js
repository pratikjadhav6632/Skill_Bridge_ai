// Select the sign-in button link element
const signInBtnLink = document.querySelector('.signInBtn-link');

// Select the sign-up button link element
const signUpBtnLink = document.querySelector('.signUpBtn-link');

// Select the wrapper element that contains the sign-in and sign-up forms
const wrapper = document.querySelector('.wrapper');

// Add a click event listener to the sign-up button link
// When clicked, it toggles the 'active' class on the wrapper element
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Add a click event listener to the sign-in button link
// When clicked, it toggles the 'active' class on the wrapper element
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLK8WZHbOKKhe4WRwvXewqHolHOQjX39Y",
    authDomain: "skill-bridge-d102b.firebaseapp.com",
    projectId: "skill-bridge-d102b",
    storageBucket: "skill-bridge-d102b.firebasestorage.app",
    messagingSenderId: "321096933150",
    appId: "1:321096933150:web:76532bb68c0a10c46bf30f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //input fields


  //submit button 
  const submit=document.getElementById('submit');
  submit.addEventListener('click',function(event){
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const username=document.getElementById('username').value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("login SUccesfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  })