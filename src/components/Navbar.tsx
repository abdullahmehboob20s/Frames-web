import React from "react";
import logo from "assets/images/logo.png";

interface NavbarItem {
  title: string;
  classprops?: any;
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="container py-8 flex items-center justify-between ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="space-x-[34px]">
        <a
          href="#"
          className="cursor-pointer text-white text-lg font-bold uppercase"
        >
          About
        </a>
        <a
          href="#"
          className="cursor-pointer text-white text-lg font-bold uppercase"
        >
          SPECS
        </a>
        <a
          href="#"
          className="cursor-pointer text-white text-lg font-bold uppercase"
        >
          OASIS
        </a>
        <a
          href="#"
          className="cursor-pointer text-white text-lg font-bold uppercase"
        >
          COLLECTION
        </a>
        <a
          href="#"
          className="cursor-pointer text-white text-lg font-bold uppercase"
        >
          ROADMAP
        </a>
        <a
          href="#"
          className="cursor-pointer text-white text-lg font-bold uppercase"
        >
          TEAM
        </a>
        <a
          href="#"
          className="cursor-pointer text-white text-lg font-bold uppercase"
        >
          FAQ’S
        </a>
      </div>
      <div>
        <button className="py-[18px] px-[32px] rounded-[35px] font-display text-xl bg-yellow-red-gradient text-white capitalize font-black">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
