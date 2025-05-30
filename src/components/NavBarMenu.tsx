"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const routes = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Cart", path: "/cart" }
]

export default function NavBarMenu() {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  }

  return (
    <div className="md:hidden relative">
      <button
        onClick={handleClick}
        className="md:hidden text-white">
        <Image
          src="icons/menu.svg"
          alt="Menu Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>
      <div className={`absolute right-0 z-10 text-lg mt-2 py-4 px-2 bg-rose-400 rounded-md shadow-lg w-fit ${hidden ? 'hidden' : 'block'}`}>
        <ul className="space-x-4">
          {routes.map((route, index) => (
            <li key={index} onClick={handleClick} className="mb-2">
              <Link href={route.path} className="hover:text-gray-300">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}