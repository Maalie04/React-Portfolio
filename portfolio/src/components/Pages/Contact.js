import React, { useState, useEffect } from "react";
import { validateEmail } from "../../utils/helpers";
// import "../css/Contact.css";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = `${props.title}`;
  });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // make sure inputs are not empty
    if (name.length === 0) {
      alert("You must enter a name");
      return;
    }
    if (email.length === 0) {
      alert("You must enter a email");
      return;
    }
    if (message.length === 0) {
      alert("You must enter a message");
      return;
    }
    // check if it's a valid email
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    alert(`Thank you for your message, ${name}!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="backgroud">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Contact Me</h1>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <h1 className="display-6 fw-bold">{props.title}</h1>

              <div className="form-floating mb-3">
                Enter Name
                <input
                  className={
                    name ? "form-control m-1 valid" : "form-control m-1 invalid"
                  }
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="form-floating mb-3">
                Enter Email
                <input
                  className={
                    email
                      ? "form-control m-1 valid"
                      : "form-control m-1 invalid"
                  }
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="checkbox mb-3">
                <textarea
                  className={
                    message
                      ? "form-control m-1 valid"
                      : "form-control m-1 invalid"
                  }
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  type="text"
                  required="true"
                  placeholder="Message"
                />
              </div>
              <button
                type="button"
                className="mt-2 btn btn-primary"
                onClick={handleFormSubmit}
              >
                Submit
              </button>

              <p className="text-muted">Submit name, email and message</p>
            </form>
          </div>
        </div>
      </div>
      <div className="form-signin">
        <div className="d-flex justify-content-center">
          <form className="needs-validation" action="POST"></form>
        </div>
      </div>
    </div>
  );
}
