// Navbar.js
import React from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "./ThemeSwitcher";
import UserMenu from "./UserMenu";

const Navbar = () => {
  
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none gap-4">
        <NavLinks/>
        <ThemeSwitcher />
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
