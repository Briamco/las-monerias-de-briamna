import Card from "../components/Card";

export default function Page({ params }: { params: { id: string } }) {
  console.log("Product ID:", params.id);

  return (
    <div>
      <div className="flex space-x-4 mb-8">
        <div className="space-y-4">
          <article className="bg-gray-200 aspect-video w-220 rounded-[10px]"></article>
          <div className="flex gap-2 overflow-x-scroll pr-8 max-w-220 [&::-webkit-scrollbar]:hidden ">
            {Array.from({ length: 10 }).map((_, i) => (
              <article key={i} className="bg-gray-200 aspect-video h-[100px] rounded-[10px]"></article>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-7xl font-bold mb-4">Lorem ipsum dolor sit amet.</h1>
            <p className="text-5xl font-light">RD$ 0.00</p>
            <p className="text-gray-500 text-2xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.
              Quisquam, voluptatum.
            </p>
          </div>
          <div className="flex flex-col space-y-4 items-end">
            <div className="flex items-center w-fit bg-gray-400 rounded-full overflow-hidden text-4xl">
              <input type="button" className="px-6 py-3 text-black hover:bg-gray-500 cursor-pointer" value='-' />
              <p className="bg-neutral-300 px-6 py-3 font-bold">1</p>
              <input type="button" className="px-6 py-3 text-black hover:bg-gray-500 cursor-pointer" value='+' />
            </div>
            <button className="bg-rose-400 text-white font-bold w-full text-5xl py-4 rounded-[10px] hover:bg-rose-500 hover:cursor-pointer">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  )
}