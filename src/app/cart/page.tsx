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
    <div className="flex items-center w-[80%] mx-auto space-x-4">
      <div className="space-y-2 w-full h-full">
        {cart?.length ? cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-300 rounded-xl p-4 w-full">
            <div className="flex space-x-1">
              <Image
                src={item.image || "/file.svg"}
                alt={item.name}
                width={52}
                height={52}
                className="rounded-md"
              />

              <div className="flex flex-col px-4">
                <span className="font-bold text-xl">{item.name}</span>
                <span className="text-black text-[16px] font-light">RD$ {item.price}.00</span>
              </div>
            </div>

            <div className="flex flex-col space-y-1 items-end">
              <button>
                <Image src="/icons/trash.svg" alt="Trash icon" width={20} height={20} />
              </button>

              <div className="flex items-center bg-gray-400 rounded-full overflow-hidden">
                <input type="button" className="px-3 py-1 text-black hover:bg-gray-500 cursor-p" value='-' />
                <p className="bg-white px-3 py-1 font-bold">{item.cantity || 0}</p>
                <input type="button" className="px-3 py-1 text-black hover:bg-gray-500 cursor-p" value='+' />
              </div>
            </div>
          </div>
        )) : (<></>)}
      </div>
      <form className="flex flex-col h-full items-center w-fit justify-center space-y-4 bg-neutral-100 p-8 rounded-[10px]">
        <h1 className="font-bold text-4xl">Formulario de Pedido</h1>
        <input type="text" placeholder="Name" className="w-full" />
        <input type="email" placeholder="Email" className="w-full" />
        <button type="submit" className="btn w-full text-2xl">Hacer Pedido</button>
      </form>
    </div>
  )
}