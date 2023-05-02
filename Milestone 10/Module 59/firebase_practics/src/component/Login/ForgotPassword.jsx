import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.config";
import "./Login.scss";

const auth = getAuth(app);

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailSent(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="forgot-password">
      {emailSent ? (
        <p>An email has been sent to your email address.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h4>Forgot Password</h4>
          <span>Give us your email</span>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input type="submit" value="Send Email" />
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
