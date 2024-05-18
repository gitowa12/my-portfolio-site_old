import { Link } from "react-router-dom";
import HambugerMenu from "../components/HambugerMenu";
import { useState } from "react";

const Header = () => {
  return (
    <>
      <header className="h-14 flex justify-between items-center md:h-16">
        <h1 className={`font-bold tracking-widest text-xl transition  duration-100 `}>
          <Link to="/">TOWA</Link>
        </h1>
        <div className="md:hidden">
          {/* <img src="/menu.svg" alt="メニュー" className="w-6 h-6" /> */}
          <HambugerMenu></HambugerMenu>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4">
              <li className="font-bold tracking-wide text-lg">
                <Link to="/about">About</Link>
              </li>
              <li className="font-bold tracking-wide text-lg">
                <Link to="/Work">Work</Link>
              </li>
              <li className="font-bold tracking-wide text-lg">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="font-bold tracking-wide text-lg">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
