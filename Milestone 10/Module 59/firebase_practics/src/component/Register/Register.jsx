import React, { useState, useEffect } from "react";
import "../Login/Login.scss";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setSuccess(false);
  }, [email, password]);

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    if (!email || emailError || !password || passwordError) {
      alert("Please fill out all required fields correctly.");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          sendEmailVerification(user).then((res) => {
            console.log(res);
            alert("Please verify your email ");
          });
          setTimeout(() => {
            setSuccess(true);
            setError("");
          }, 1000); // Clear success message after 5 seconds
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("The email address you entered is already in use.");
            setSuccess(false);
          } else {
            setError("An error occurred. Please try again later.");
          }
        });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
      setError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else if (!/[A-Z]/.test(e.target.value)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else if (!/\d/.test(e.target.value)) {
      setPasswordError("Password must contain at least one digit");
    } else if (!/[!@#$%^&*]/.test(e.target.value)) {
      setPasswordError(
        "Password must contain at least one special character (!@#$%^&*)"
      );
    } else {
      setPasswordError("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register">
      <h4>Register</h4>
      <form onSubmit={submitHandler}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        {emailError && <span>{emailError}</span>}
        <input
          onChange={handlePasswordChange}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
        />
        <button type="button" onClick={toggleShowPassword}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        {passwordError && <span>{passwordError}</span>}
        <input type="submit" value={"Register"} />
        {error && <p>{error}</p>}
        {success && <p>Your account has been successfully created!</p>}
      </form>
    </div>
  );
};

export default Register;
