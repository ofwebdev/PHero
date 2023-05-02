import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={"/phone"}>All phone</Link>
    </div>
  );
}

export default Header;
