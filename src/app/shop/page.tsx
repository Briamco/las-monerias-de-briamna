import Card from "./components/Card";

export default function Page() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 overflow-x-auto [&::-webkit-scrollbar]:hidden max-w-screen w-screen -mx-2 px-2 sm:mx-0 sm:w-full xl:max-w-[1450px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <article
            key={i}
            className="rounded-full bg-rose-300 text-white px-4 py-2 text-center text-sm font-bold cursor-pointer hover:bg-rose-400"
          >Category</article>
        ))}
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  )
}