import { useEffect } from "react";

export default function HeroBanner() {
  useEffect(() => {
    const phone = document.getElementById("phone");
    phone.value = "+62";
  });

  return (
    <div>
      <div className="pl-20 w-[600px] text-white">
        <h1 className="text-[28px] font-bold pb-4">
          Bimbel Online & Offline Terbesar, Terlengkap, dan Terbukti di
          Indonesia
        </h1>
        <div className="relative">
          <label htmlFor="phone" className="text-base font-semibold">
            Diskon spesial untukmu dengan isi nomor HP sekarang
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="mt-3 p-5 w-full text-black rounded-full text-xl font-semibold outline-none border-none"
            placeholder="+62"
            maxLength={16}
          />
          <button className="flex items-center gap-[5px] absolute top-[45%] right-[2.25%] bg-[#f26d0f] py-3 pr-4 pl-6 rounded-full text-sm font-semibold">
            Dapatkan Diskon{" "}
            <i data-feather="chevron-right" className="w-[16px] h-[16px]"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
