import React, { useState } from "react";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <button
        className="w-14 h-14 bg-green-500 rounded-md"
        onClick={() => setMenu((prev) => !prev)}
      >
        Me
      </button>
    </nav>
  );
};

export default MobileNav;
