export default function PromoIklan() {
  return (
    <div className="bg-promo-background bg-promo-position bg-no-repeat bg-promo-size">
      <div className="bg-promo-iklan h-[72px] mx-[680px] w-full flex">
        <div className="mx-[136px] gap-4 flex text-white items-center">
          <img
            src="https://cdn-web-2.ruangguru.com/landing-pages/assets/cbe44a2f-3714-446c-910f-ef65eecca374.png?convert=webp"
            className="w-[200px] h-[72px]"
          />
          <div className="text-center w-[510px]">
            <p className="text-xl font-extrabold mb-2">
              PROMO PTS Diskon s.d. 50%, TERBATAS!
            </p>
            <p className="font-bold text-base mb-1">
              Promo berakhir 9 hari lagi! <span>14</span> : <span>20</span> :{" "}
              <span>00</span>
            </p>
          </div>
          <div className="flex items-center gap-2 py-3 pl-[18px] pr-[14px] rounded-full bg-white text-black">
            <p className="text-base font-bold text-[#2C313A]">Klaim Sekarang</p>
            <i
              data-feather="chevron-right"
              className="w-6 h-6 text-[#2C313A]"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
