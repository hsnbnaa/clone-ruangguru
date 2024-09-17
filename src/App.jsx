import { Fragment, useEffect } from "react";
import Header from "./components/fragments/Header";
import feather from "feather-icons";

function App() {
  useEffect(() => {
    feather.replace();
  });

  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;
