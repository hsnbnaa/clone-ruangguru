export default function PaketCard() {
  return (
    <div className="w-[218px] relative">
      <div className="p-3 bg-paket-background rounded-tl-xl rounded-tr-xl flex flex-col h-[294px]">
        <div className="flex items-center bg-[#4844fa] py-1 px-[14px] gap-2 w-[164px] rounded-xl">
          <img src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/00%20-%20Homepage%20Ruangguru%202022/icons/calcheck.svg?convert=webp" />
          <p className="text-white text-xs font-semibold">SNBT 2023 Terbaru</p>
        </div>
        <h3 className="mt-2 mb-1 text-xs font-semibold">
          ruangbelajar + UTBK-SNBT
        </h3>
        <h4 className="text-base font-bold">
          Video belajar dan latihan soal Tes Skolastik
        </h4>
        <img
          src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/00%20-%20Homepage%20Ruangguru%202022/product-list-2023/tryout-snbt.png"
          className="justify-self-end mt-12"
        />
      </div>
      <div className="p-3 rounded-xl bg-white absolute top-[84%]">
        <div className="w-full flex flex-col gap-2">
          <div>
            <p className="text-xs font-semibold text-[#60697f]">
              <span>
                ruangbelajar SMA/SMK + UTBK (Semester Genap + Persiapan PAS)
              </span>
              <span className="ml-[2px] line-through">Rp&nbsp;1.800.000</span>
            </p>
            <div>
              <span className="text-xs font-semibold p-[2px] mr-1 text-[#e52a34] bg-[#f9eeef] rounded-[4px]">
                50%
              </span>
              <span className="text-base font-bold text-[#2c313a]">
                Rp&nbsp;83.250
              </span>
              <span className="text-[#5e677b] font-semibold text-xs">
                /bulan
              </span>
            </div>
          </div>
          <a
            href="#"
            className="bg-[#f26d0f] rounded-full text-white text-sm font-bold px-3 py-[6px] text-center w-full"
          >
            Beli Paket
          </a>
          <ul className="flex flex-col gap-2 min-h-[136px]">
            <li className="flex gap-[6px]">
              <img
                src="https://imgix3.ruangguru.com/assets/payment/payment_flow/landing_page/review-star.png"
                className="w-[14px] h-[14px] mt-[2px]"
              />
              <p className="text-[#2c313a] font-normal text-sm">
                Pengguna berpeluang 3x lebih besar masuk kampus impian
              </p>
            </li>
            <li className="flex gap-[6px]">
              <img
                src="https://imgix3.ruangguru.com/assets/payment/payment_flow/landing_page/review-light.png"
                className="w-[14px] h-[14px] mt-[2px]"
              />
              <p className="text-[#2c313a] font-normal text-sm">
                Hingga 20x tryout UTBK/SNBT Tes Skolastik
              </p>
            </li>
          </ul>
          <a
            href="#"
            className="flex gap-2 items-center justify-center text-[#13939e] font-bold p-2"
          >
            Lihat Detail{" "}
            <img
              src="https://roboguru-forum-cdn.ruangguru.com/image/388642c8-7499-4329-9bec-885d1b5fe5df.png"
              className="w-[16px] h-[16px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
