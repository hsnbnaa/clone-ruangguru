import ProductCard from "./ProductCard";

const content = [
  {
    img_url:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/icon-utbk-persiapan.svg",
    title: "Persiapan UTBK-SNBT",
  },
  {
    img_url:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Brain%20Academy%20Center.svg",
    title: "Bimbel Tatap Muka",
  },
  {
    img_url:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Brain%20Academy.svg",
    title: "Bimbel Online Interaktif",
  },
  {
    img_url:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Video%20Belajar.svg",
    title: "Video Belajar dan Soal",
  },
  {
    img_url:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20English%20Academy.svg",
    title: "English Academy",
  },
  {
    img_url:
      "https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Semua%20Produk.svg",
    title: "Semua Produk",
  },
];

export default function ProductContainer() {
  return (
    <div className="absolute top-[287px] left-[26.6%] bg-white p-4 rounded-3xl flex gap-3">
      {content.map((item, index) => (
        <ProductCard key={index} img_url={item.img_url} title={item.title} />
      ))}
    </div>
  );
}
