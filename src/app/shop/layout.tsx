import Link from "next/link";
import Cart from "./components/Cart";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row md:space-x-4 justify-between">
      <main className="flex-1">{children}</main>
      <div className="w-auto">
        <Link
          href='/cart'
          className="btn w-full left-0 right-2 bottom-3 z-50 fixed text-center text-4xl rounded-none rounded-t-[10px] lg:hidden"
        >
          Ir al carro
        </Link>
        <div className="hidden lg:block sticky top-8">
          <Cart />
        </div>
      </div>
    </div>
  );
}