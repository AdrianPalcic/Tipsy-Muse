import Link from "next/link";
import React from "react";
import { links } from "../constants";

const Footer = () => {
  const usefulLinks = [
    { text: "Politika Privatnosti", slug: "/politika-privatnosti" },
    { text: "Uvjeti Korištenja", slug: "/uvjeti-koristenja" },
    { text: "Kolačići", slug: "/kolacici" },
  ];

  return (
    <footer className="bg-tetriary-dark border-t-4 border-primary py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo and Social Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/Logo.png"
              alt="Tipsy Muse Logo"
              className="w-32 mb-4"
            />
            <p className="text-white text-center md:text-left text-sm mb-4 max-w-xs">
              Studio za zabavu, druženje i kreativno izražavanje.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 bg-white rounded-md flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg
                  className="w-5 h-5 text-tetriary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 bg-white rounded-md flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <svg
                  className="w-5 h-5 text-tetriary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Brzi Linkovi (Quick Links) */}
          <div className="text-center md:text-left">
            <h3 className="text-secondary text-2xl font-luckiest-guy mb-4">
              BRZI LINKOVI
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`/${link.slug}`}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt (Contact) */}
          <div className="text-center md:text-left">
            <h3 className="text-secondary text-2xl font-luckiest-guy mb-4">
              KONTAKT
            </h3>
            <ul className="space-y-2 text-white">
              <li>
                <a
                  href="mailto:tipsymusezagreb@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  tipsymusezagreb@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+385XXXXXXXX"
                  className="hover:text-primary transition-colors"
                >
                  +385 XX XXX XXXX
                </a>
              </li>
              <li>Zagreb, Hrvatska</li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Korisno (Useful) */}
          <div className="text-center md:text-left">
            <h3 className="text-secondary text-2xl font-luckiest-guy mb-4">
              KORISNO
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={link.slug}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/30 pt-6 text-center">
          <p className="text-white/70 text-sm">
            © 2025 TIPSY MUSE. SVA PRAVA PRIDRŽANA. NAPRAVLJENO S 💗 I 🍷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

