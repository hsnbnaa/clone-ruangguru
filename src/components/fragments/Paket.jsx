import PaketCard from "../elements/PaketCard";

export default function Paket() {
  return (
    <section>
      <div className="flex items-center mx-[680px] gap-2">
        <i data-feather="star" className="fill-amber-300 text-amber-300"></i>
        <h2 className="text-2xl font-bold ">Paket populer untuk</h2>
        <button className="text-base font-semibold text-[#2c313a] p-3 rounded-xl border border-[#cfd3db] bg-white">
          <span className="flex items-center gap-1">
            SMA - Kelas 12
            <i data-feather="chevron-down" className="w-5 h-5"></i>
          </span>
        </button>
      </div>
      <div className="mx-[680px] pt-4 pb-8 flex gap-2">
        <PaketCard />
        <PaketCard />
        <PaketCard />
        <PaketCard />
      </div>
    </section>
  );
}
