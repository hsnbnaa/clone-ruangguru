import Navbar from "../elements/Navbar";
import PromoIklan from "../elements/PromoIklan";

export default function Header() {
  return (
    <header className="bg-header-background fixed top-0 z-10 w-full">
      <PromoIklan />
      <Navbar />
    </header>
  );
}
