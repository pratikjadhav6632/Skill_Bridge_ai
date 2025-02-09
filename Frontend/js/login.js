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