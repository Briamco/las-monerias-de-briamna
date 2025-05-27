'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from "react";

type CartItem = {
  name: string;
  price: number;
  cantity?: number;
  image?: string;
};

const CartMock: CartItem[] = [{ name: "Pizza", price: 10, cantity: 1 }, { name: "Burger", price: 5, cantity: 2 }];

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>();

  useEffect(() => {
    setCart(CartMock);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-[350px] h-[850px] shadow-xl rounded-[10px] p-[25px]">
      <div className="space-y-2 w-full h-full">
        {
          cart?.length ?
            cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-300 rounded-xl p-4 w-full max-w-md">
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

            ))
            : (
              <>
                <h1 className="text-2xl font-bold">Carrito</h1>
                <p className="mt-4 text-lg text-center">Tu carrito está vacío.</p>
              </>
            )
        }
      </div>
      <Link href='/cart' className='btn text-center w-full text-2xl'>Hacer Pedido</Link>
    </div>
  );
}