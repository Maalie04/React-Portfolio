import React from "react";

export default function Contact() {
    return (
        <div> 
        <h1>Contact Page </h1>
        </div>
    );
}

// const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !userName) {
//       setErrorMessage('Email or username is invalid');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!checkPassword(password)) {
//       setErrorMessage(
//         `Choose a more secure password for the account: ${userName}`
//       );
//       return;
//     }
//     alert(`Hello ${userName}`);

//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setUserName('');
//     setPassword('');
//     setEmail('');
//   };