export default function ProductCard(props) {
  const { img_url, title } = props;

  return (
    <div className="p-3 border border-[#cfd3db] rounded-2xl w-[184.67px]">
      <a href="#" className="flex gap-[11.2px] items-center">
        <div className="flex flex-col w-[44px] h-[46px] relative items-center">
          <img src={img_url} alt="" />
          <p className="absolute top-[70%] left-[50%] translate-x-[-50%] uppercase text-[10px] font-semibold text-white px-1 bg-red-500 rounded-full">
            Intensif
          </p>
        </div>
        <p className="text-sm font-semibold w-[100px]">{title}</p>
      </a>
    </div>
  );
}
