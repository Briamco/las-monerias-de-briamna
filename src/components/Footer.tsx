export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full min-h-[214px] bg-rose-300 rounded-[10px] px-24 py-10">
      <div></div>
      <form className="flex flex-col items-center justify-center space-y-[10px]">
        <input type="text" placeholder="Josh G." />
        <textarea placeholder="Escribe algo aqui..."></textarea>
        <button className="text-[16px] w-full">Contactar</button>
      </form>
    </footer>
  )
}