import { Fragment, useEffect } from "react";
import Header from "./components/fragments/Header";
import feather from "feather-icons";
import Hero from "./components/fragments/Hero";
import Product from "./components/fragments/Product";
import Paket from "./components/fragments/Paket";

function App() {
  useEffect(() => {
    feather.replace();
  });

  return (
    <Fragment>
      <Header />
      <main className="min-h-screen mt-[152px] bg-[#f2f5fa]">
        <Hero />
        <Product />
        <Paket />
      </main>
    </Fragment>
  );
}

export default App;
