export default function Navbar() {
  return (
    <nav className="py-3 text-white flex gap-5 items-center w-full px-[680px]">
      <a href="#">
        <img
          src="https://cdn-web-2.ruangguru.com/landing-pages/assets/25e770e0-cdb4-4540-9676-debc11d60793.png"
          className="w-[108px] h-[37px]"
        />
      </a>
      <div className="flex gap-8 items-center w-[830px] mx-4 font-medium text-base">
        <div className="flex items-center gap-1">
          <a href="#">Produk</a>
          <i data-feather="chevron-down" className="w-4 h-4"></i>
        </div>
        <a href="#">Program</a>
        <a href="#">Promo</a>
        <a href="#">Event</a>
        <a href="#">Beasiswa</a>
        <a href="#">Testimoni</a>
        <div className="flex items-center gap-1">
          <a href="#">Layanan</a>
          <i data-feather="chevron-down" className="w-4 h-4"></i>
        </div>
        <a href="#">Ruangbaca</a>
      </div>
      <div className="py-4 px-2 rounded-full bg-[#7ac9d0] ml-auto">
        <a
          href="#"
          className="py-3 px-7 bg-white text-black justify-end rounded-full text-sm font-bold"
        >
          Beli Paket Belajar
        </a>
      </div>
    </nav>
  );
}
