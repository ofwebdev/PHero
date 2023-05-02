import React, { useState } from "react";
import "./Login.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    if (!email || emailError || !password || passwordError) {
      alert("Please fill out all required fields correctly.");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccess(true); // set success message
          navigate("/"); // Redirect to the home page on success
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/user-not-found") {
            alert(
              "Invalid email address. Please try again or register for an account."
            );
          } else {
            alert("An error occurred. Please try again later.");
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
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="login">
      <h4>Login</h4>
      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <span>{emailError}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <span>{passwordError}</span>}
        <input className="log-submit" type="submit" value={"Login"} />
        {success && <p>Login successful!</p>}
        {error && <p>{error}</p>}
      </form>

      <p>
        Are you new user ? <Link to="/register">Register</Link>
      </p>
      <Link to={"/forgot-password"} onClick={toggleForgotPassword}>
        Forgot Password?
      </Link>
      {showForgotPassword && <ForgotPassword />}
    </div>
  );
};

export default Login;
