import Image from 'next/image'
import Link from 'next/link'

const info = [
  {
    title: 'Hechos a tu estilo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    icon: '/icons/palette.svg'
  },
  {
    title: 'Diseños artesanales',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    icon: '/icons/award.svg'
  },
  {
    title: 'Regalos únicos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    icon: '/icons/gift.svg'
  }
]

export default function Page() {
  return (
    <div className='flex flex-col justify-between'>
      <header className="flex flex-col md:flex-row justify-between bg-neutral-400 w-full md:h-[500px] rounded-[10px] py-10 px-4 md:px-20">
        <div></div>
        <div className="flex flex-col space-y-[7px] items-center justify-center h-full text-white">
          <h1 className='font-bold text-2xl text-center md:text-left md:text-4xl'>
            Las monerías de Briamna
          </h1>
          <p className='text-md w-full md:text-2xl md:w-[414px] text-center'>
            ✨ Detalles únicos, hechos con amor Cada pieza es hecha a mano para llenar tu espacio de ternura.
          </p>
          <Link href='/shop' className='btn text-2xl mt-6 px-[16px] py-[10px]'>Ver Productos</Link>
        </div>
      </header>
      <div className="flex flex-col md:flex-row w-full items-center justify-around my-16">
        {info.map((item, index) => (
          <article key={index} className='flex flex-col items-center justify-center text-center'>
            <Image
              src={item.icon}
              alt="Palette Icon"
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-[10px]"
            />
            <h1 className='text-rose-400 font-bold md:text-4xl'>
              {item.title}
            </h1>
            <p className='text-sm w-[244px]'>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}