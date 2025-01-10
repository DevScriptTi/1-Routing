"use client";
import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", name: "Home" },
  { href: "/dashboard", name: "Dashboard" },
  { href: "/services", name: "Services" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
  { href: "/login", name: "Sign In" },
  { href: "/register", name: "Sign Out" },
];

const NavBar = () => {
  const pahtname = usePathname();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {links.slice(0, 5).map((link, index) => {
            const isActive = pahtname === link.href;
            return (
              <Link key={index} href={link.href} passHref>
                <span
                  className={` cursor-pointer ${
                    isActive ? "font-bold text-violet-700" : "text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="flex-grow mx-4">
          <SearchInput />
        </div>
        <div className="flex space-x-4">
          {links.slice(5).map((link, index) => {
            const isActive = pahtname === link.href;
            return (
              <Link key={index} href={link.href} passHref>
                <span
                  className={`text-white cursor-pointer ${
                    isActive && "font-bold text-violet-700"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
