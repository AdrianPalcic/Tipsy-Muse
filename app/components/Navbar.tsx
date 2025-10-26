import React from "react";
import { links } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-2 sm:px-6 py-2 fixed top-0 w-full z-50 border-b-3 border-primary border-solid">
      <nav className="flex justify-between items-center font-luckiest-guy text-primary">
        <div id="logo" className="w-[100px] h-[100px]">
          <img src="Logo.png" alt="Tipsy Muse Logo" className="w-full h-full" />
        </div>
        <ul className="flex gap-6 text-[18px] items-center">
          {links.map((link, index) => {
            const isLast = index === links.length - 1;
            return (
              <li
                key={link.text}
                className={isLast ? "button blue text-black" : ""}
              >
                <Link
                  href={link.slug}
                  className={!isLast ? "nav-link relative" : ""}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
