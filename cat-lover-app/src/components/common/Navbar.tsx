import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/cat-lover.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-30 text-primaryBrown1 max-w-[1240px] px-4 mx-auto">
      <Link to="/">
        <img className="mx-left py-4" src={Logo} alt="/" />
      </Link>
      <ul className="flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/kitties">Kitties</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
