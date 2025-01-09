"use client";
import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { FaBell, FaLifeRing } from "react-icons/fa";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", name: "Home" },
  { href: "/", name: "Leave dashboard" },
  { href: "/notifications", name: "Notifications", icon: <FaBell /> },
  { href: "/support", name: "Support", icon: <FaLifeRing /> },
];

const NavBarDash = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          {links.slice(0, 2).map((link, index) => {
            const isActive = pathname === link.href;
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
        <div className="flex-grow mx-4">
          <SearchInput />
        </div>
        <div className="flex items-center space-x-4">
          {links.slice(2).map((link, index) => (
            <Link key={index} href={link.href} passHref>
              <span className="text-white cursor-pointer flex items-center">
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBarDash;
