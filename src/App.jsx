import { Fragment, useEffect } from "react";
import Header from "./components/fragments/Header";
import feather from "feather-icons";
import Hero from "./components/fragments/Hero";

function App() {
  useEffect(() => {
    feather.replace();
  });

  return (
    <Fragment>
      <Header />
      <main className="mt-[152px]">
        <Hero />
      </main>
    </Fragment>
  );
}

export default App;
