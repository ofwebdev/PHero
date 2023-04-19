import React from "react";
import "./Header.css";
// import brandLogo from "../../assets/logo-dark";

export default function Header() {
  return (
    <div>
      <div className="banner">
        <div className="banner-left">
          <div className="logo">{/* <img src="../../" alt="Logo" /> */}</div>
        </div>

        <div className="banner-right">
          <h1>Likelink.ltd</h1>
        </div>
      </div>
    </div>
  );
}
