import Link from "next/link";
import NavBarMenu from "./NavBarMenu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between rounded-[10px] px-4 py-2 bg-rose-300 text-white">
      <Link href='/' className="text-lg font-bold">Las Monerias de Briamna</Link>
      <NavBarMenu />
      <ul className="space-x-4 hidden md:flex">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="hover:text-gray-300">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/cart" className="hover:text-gray-300">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}