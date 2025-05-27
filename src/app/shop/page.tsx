import Card from "./components/Card";
import Cart from "./components/Cart";

export default function Page() {
  return (
    <div className="flex space-x-4 justify-between w-full">
      <div>
        <div className="flex items-center gap-2 mb-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden pr-8 max-w-[1450px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <article
              key={i}
              className="rounded-full bg-rose-300 text-white px-4 py-2 text-center text-sm font-bold cursor-pointer hover:bg-rose-400"
            >Category</article>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
      <div className="w-auto">
        <div className="sticky top-8">
          <Cart />
        </div>
      </div>
    </div>
  )
}