'use client'

import Image from "next/image";
import { redirect } from "next/navigation";

export default function Card() {
  return (
    <article onClick={() => redirect('/shop/1')} className="w-full md:max-w-[280px] h-fit bg-white shadow-2xl rounded-[10px] flex flex-col items-center justify-between transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="w-full aspect-video bg-gray-400 rounded-t-[10px]"></div>
      <div className="flex items-center justify-between w-full px-4 py-1">
        <div>
          <h1>Lorem Ipsum</h1>
          <p>RD$ 0.00</p>
        </div>
        <button className="transition-all duration-300 hover:scale-110 cursor-pointer">
          <Image
            src="/icons/cart.svg"
            alt="Pizza"
            width={20}
            height={20}
          />
        </button>
      </div>
    </article>
  )
}