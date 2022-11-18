import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

//Use state variables to control the form submission
function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //One function to handle name, email and message
  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "fullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  //Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !fullName) {
      setErrorMessage("Email/Name is invalid");
      return;
    }

    if (!message) {
      setErrorMessage(`Message is required.`);
      return;
    }

    setFullName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <section className="contact">
      <div>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-details">
        <div>
          <p>My contact info!</p>
          <p>
            Phone: <a href="tel:757.641.3628">757.641.3628</a>
          </p>
          <p>
            Email: <a href="mailto://parson40@gmail.com">parson40@gmail.com</a>
          </p>
        </div>

        <div className="form">
          <form>
            <label for="fullName">Your Name</label>
            <input
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
              type="text"
              id="fullName"
              placeholder="Full Name"
            />

            <label for="email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="email"
              placeholder="Email"
            />

            <label for="message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="message"
              placeholder="Message"
            />
            <button type="button" className="btn" onClick={handleFormSubmit}>
              Submit
            </button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
