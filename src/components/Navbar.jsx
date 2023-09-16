import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-5 fixed top-0 left-0 z-10">
      <div className="flex-1 item-center">
        <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
          <div className="logo w-10 max-[400px]:w-7">
            <img src="./img/logo.png" alt="" />
          </div>
          <h2 className=" max-[400px]:text-md ">Taufiq Hidayah Abdullah</h2>
        </a>
      </div>
      <div className="flex-none max-[400px]:hidden">
        <ul className="menu menu-horizontal px-1 flex gap-3">
          <li>
            <a
              className="outline outline-1 rounded-full px-8 hover:outline-slate-600"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="outline outline-1 rounded-full px-8 hover:outline-slate-600"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="outline outline-1 rounded-full px-8 hover:outline-slate-600"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
