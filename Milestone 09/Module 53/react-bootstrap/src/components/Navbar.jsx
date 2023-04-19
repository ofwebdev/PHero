import React from "react";
import NavLink from "./NavLink";
import { BeakerIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Services" },
    { id: 4, path: "/blog", name: "Blog" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <div>
      <BeakerIcon />

      <ul>
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
