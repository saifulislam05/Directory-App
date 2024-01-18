import React from 'react'
import { Link, useLocation } from "react-router-dom";
const NavLinks = () => {
    const location = useLocation();
    const path = location.pathname;
    
  return (
    <ul className="flex mr-4 *:px-3 *:py-2 gap-4 font-bold *:cursor-pointer *:duration-500">
      <li
        className={`hover:scale-95 text-primary-content rounded-3xl ${
          path === "/" ? "text-slate-800 scale-95 bg-[#cccccc1e]" : ""
        }`}
      >
        <Link to="">Add New Person</Link>
      </li>
      <li
        className={`hover:scale-95 text-primary-content rounded-3xl ${
          path === "/retrieve" ? "text-slate-800 scale-95 bg-[#cccccc1e]" : ""
        }`}
      >
        <Link to="retrieve"> Retrieve Information</Link>
      </li>
    </ul>
  );
}

export default NavLinks