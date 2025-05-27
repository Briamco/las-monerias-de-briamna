import Cart from "./components/Cart";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex space-x-4 justify-between">
      <main className="flex-1">{children}</main>
      <div className="w-auto">
        <div className="sticky top-8">
          <Cart />
        </div>
      </div>
    </div>
  );
}