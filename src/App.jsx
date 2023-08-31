import React from "react";
import Navbar from "./components/Navbar";
import Page0 from "./pages/Page0";

const App = () => {
  return (
    <main>
      <header className="w-full h-20 bg-[#f8f7f2] fixed top-0 left-0 shadow-md">
        <Navbar />
      </header>
      <Page0 />
    </main>
  );
};

export default App;
