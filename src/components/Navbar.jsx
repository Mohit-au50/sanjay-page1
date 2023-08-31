import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  return (
    <div className="container mx-auto h-20">
      {/* Mobile menu */}
      <MobileNav />

      {/* Desktop menu */}
      <DesktopNav />
    </div>
  );
};

export default Navbar;
