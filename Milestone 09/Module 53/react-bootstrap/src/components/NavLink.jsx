import React from "react";

function NavLink({ route }) {
  return (
    <li>
      <a href={route.path}>{route.name}</a>
    </li>
  );
}

export default NavLink;
