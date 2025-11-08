import logo from "../assets/Logo.png";


const Header = () => {
  return (
    <div>
         <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
  <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
  <h1 className="text-2xl font-bold text-[#004173]">
    Kinesiología & Bienestar
  </h1>
</div>

        <nav className="flex gap-6">
          <a href="#servicios" className="text-[#004173] hover:text-emerald-700">
            Servicios
          </a>
                    <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#004173] text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header

