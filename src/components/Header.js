import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Projects from "./Projects";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {   
      setIsOpen(!isOpen);
    }

  return (
    <header
      className={`fixed z-50 w-full top-0 ${
        props.showDarkMode ? "dark" : "bg-dash-bg"
      }`}
    >
      <div
        className={`w-full h-16 z-40 ${
          props.showDarkMode ? "dark" : "bg-dash-bg"
        }`}
      >
        <nav className={isOpen ? "open" : "close"}>
          <ul
            className="hidden md:gap-4 md:items-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            <li className="md:hidden text-center">
              <p>I am social 😉</p>
              <p className="flex justify-center gap-2 mt-6">
                <span>
                  <FaXTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </p>
            </li>
          </ul>
        </nav>
        <div className="absolute right-0 flex items-center">
          <div>
            <button className="p-2 block cursor-pointer" onClick={openNav}>
              <div className={isOpen ? "hamburger" : undefined}>
                <span className="items-center dark:bg-wheat bg-text-color h-0.5 w-4 my-1"></span>
                <span className="items-center dark:bg-wheat bg-text-color h-0.5 w-6 my-1"></span>
                <span className="items-center dark:bg-wheat bg-text-color h-0.5 w-5 my-1"></span>
              </div>
            </button>
          </div>

          <div className="p-1 border rounded-full border-slate-800 dark:border-wheat  mx-5 md:mx-10 my-5">
            <span
              className="flex justify-center items-center  cursor-pointer"
              onClick={props.handleMode}
            >
              {props.showDarkMode ? (
                <MdOutlineDarkMode size={25} />
              ) : (
                <MdOutlineLightMode size={25} />
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
