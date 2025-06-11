'use client'

import { useEffect, useState } from "react";
import Image from 'next/image';

type CartItem = {
  name: string;
  price: number;
  cantity?: number;
  image?: string;
};

const CartMock: CartItem[] = [{ name: "Pizza", price: 10, cantity: 1 }, { name: "Burger", price: 5, cantity: 2 }];

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>();

  useEffect(() => {
    setCart(CartMock);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto gap-4 px-2 sm:px-4 md:px-8">
      <div className="flex-1 space-y-2 w-full">
        {cart?.length ? cart.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center justify-between bg-gray-300 rounded-xl p-4 w-full gap-2">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Image
                src={item.image || "/file.svg"}
                alt={item.name}
                width={52}
                height={52}
                className="rounded-md"
              />
              <div className="flex flex-col px-2 min-w-0">
                <span className="font-bold text-base sm:text-xl truncate">{item.name}</span>
                <span className="text-black text-sm sm:text-[16px] font-light">RD$ {item.price}.00</span>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-1 items-center sm:items-end w-full sm:w-auto justify-end">
              <button>
                <Image src="/icons/trash.svg" alt="Trash icon" width={20} height={20} />
              </button>
              <div className="flex items-center bg-gray-400 rounded-full overflow-hidden mt-2 sm:mt-0">
                <input type="button" className="px-3 py-1 text-black hover:bg-gray-500 cursor-pointer" value='-' />
                <p className="bg-white px-3 py-1 font-bold">{item.cantity || 0}</p>
                <input type="button" className="px-3 py-1 text-black hover:bg-gray-500 cursor-pointer" value='+' />
              </div>
            </div>
          </div>
        )) : (<></>)}
      </div>
      <form className="flex flex-col h-full items-center w-full max-w-xs justify-center space-y-4 bg-neutral-100 p-4 sm:p-8 rounded-[10px]">
        <h1 className="font-bold text-2xl sm:text-4xl text-center">Formulario de Pedido</h1>
        <input type="text" placeholder="Name" className="w-full" />
        <input type="email" placeholder="Email" className="w-full" />
        <button type="submit" className="btn w-full text-2xl">Hacer Pedido</button>
      </form>
    </div>
  )
}