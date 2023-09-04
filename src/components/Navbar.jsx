import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  return (
    <header className="bg-white absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto h-20">
        {/* Mobile menu */}
        <MobileNav />

        {/* Desktop menu */}
        <DesktopNav />
      </div>
    </header>
  );
};

export default Navbar;
