"use client";
import React, { useState } from "react";
import { links } from "../constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-2 sm:px-6 py-2 fixed top-0 w-full z-50 border-b-4 border-primary border-solid ">
      <nav className="flex justify-between items-center font-luckiest-guy text-primary">
        {/* Logo */}
        <div id="logo" className="w-[100px] h-[100px]">
          <img src="Logo.png" alt="Tipsy Muse Logo" className="w-full h-full" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-[18px] items-center">
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="cursor-pointer duration-300 transition-colors hover:text-fourth"
              size={36}
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="cursor-pointer duration-300 transition-colors hover:text-fourth"
              size={36}
            />
          )}
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-tetriary-dark z-40 flex flex-col items-center justify-center gap-8 text-3xl font-luckiest-guy text-primary transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-center">
          {links.map((link, index) => {
            const isLast = index === links.length - 1;
            return (
              <li
                key={link.text}
                className={isLast ? "button blue text-black" : ""}
              >
                <Link
                  href={link.slug}
                  className={!isLast ? "nav-link relative " : "text-2xl"}
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
