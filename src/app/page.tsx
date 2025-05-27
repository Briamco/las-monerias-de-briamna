import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex flex-col justify-between'>
      <header className="flex justify-between bg-neutral-400 w-full h-[500px] rounded-[10px] py-10 px-20">
        <div></div>
        <div className="flex flex-col space-y-[7px] items-center justify-center h-full text-white">
          <h1 className='font-bold text-4xl'>
            Las monerías de Briamna
          </h1>
          <p className='text-2xl w-[414px] text-center'>
            ✨ Detalles únicos, hechos con amor Cada pieza es hecha a mano para llenar tu espacio de ternura.
          </p>
          <Link href='/shop' className='btn text-2xl mt-6 px-[16px] py-[10px]'>Ver Productos</Link>
        </div>
      </header>
      <div className="flex w-full items-center justify-around my-16">
        <article className='flex flex-col items-center justify-center text-center'>
          <Image
            src="/icons/palette.svg"
            alt="Palette Icon"
            width={100}
            height={100}
            className="rounded-[10px]"
          />
          <h1 className='text-rose-400 font-bold text-4xl'>
            Hechos a tu estilo
          </h1>
          <p className='text-sm w-[244px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </article>
        <article className='flex flex-col items-center justify-center w-fit text-center'>
          <Image
            src="/icons/award.svg"
            alt="Award Icon"
            width={100}
            height={100}
            className="rounded-[10px]"
          />
          <h1 className='text-rose-400 font-bold text-4xl'>
            Diseños artesanales
          </h1>
          <p className='text-sm w-[244px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </article>
        <article className='flex flex-col items-center justify-center w-fit text-center'>
          <Image
            src="/icons/gift.svg"
            alt="Gift Icon"
            width={100}
            height={100}
            className="rounded-[10px]"
          />
          <h1 className='text-rose-400 font-bold text-4xl'>
            Regalos únicos
          </h1>
          <p className='text-sm w-[244px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </article>
      </div>
    </div>
  )
}