import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  return (
    <header className="bg-yellow-400 h-20">
      <div className="container mx-auto h-full">
        {/* Mobile menu */}
        <MobileNav />

        {/* Desktop menu */}
        <DesktopNav />
      </div>
    </header>
  );
};

export default Navbar;
