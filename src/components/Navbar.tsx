import React from "react";
import logo from "assets/images/logo.png";
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickDetector from "hooks/OutsideClickDetector";

interface NavbarItem {
  title: string;
  classprops?: any;
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const sidebarRef = OutsideClickDetector(() => {
    setToggleMenu(false);
  });

  return (
    <nav className="container py-8 flex items-center justify-between ">
      <div>
        <img
          src={logo}
          className="xl:w-[176px]  sm:w-[130px] w-[110px]"
          alt=""
        />
      </div>

      <div className={`black-screen ${toggleMenu ? "show" : ""}`}></div>

      <div
        className={`flex item-center lg:justify-center lg:flex-row xl:space-x-[34px] lg:p-0 lg:space-y-0 lg:space-x-[20px] lg:static lg:w-auto lg:bg-transparent  lg:h-auto fixed top-0 right-0 w-[300px] bg-white h-full flex-col space-x-0 space-y-4 p-8 transition-all duration-[.3s] z-[110] ease-[ease] lg:translate-x-0 ${
          toggleMenu ? "translate-x-0" : "translate-x-[300px]"
        }`}
        ref={sidebarRef}
      >
        <button
          className="cursor-pointer lg:hidden ml-[-6px] mb-2 w-fit"
          onClick={() => setToggleMenu(false)}
        >
          <GrFormClose size={30} />
        </button>
        <a
          href="/"
          className="cursor-pointer lg:text-white text-black xl:text-lg lg:text-[14px] font-bold uppercase text-[18px] w-fit lg:w-auto"
        >
          About
        </a>
        <a
          href="/"
          className="cursor-pointer lg:text-white text-black xl:text-lg lg:text-[14px] font-bold uppercase text-[18px] w-fit lg:w-auto"
        >
          SPECS
        </a>
        <a
          href="/"
          className="cursor-pointer lg:text-white text-black xl:text-lg lg:text-[14px] font-bold uppercase text-[18px] w-fit lg:w-auto"
        >
          OASIS
        </a>
        <a
          href="/"
          className="cursor-pointer lg:text-white text-black xl:text-lg lg:text-[14px] font-bold uppercase text-[18px] w-fit lg:w-auto"
        >
          COLLECTION
        </a>
        <a
          href="/"
          className="cursor-pointer lg:text-white text-black xl:text-lg lg:text-[14px] font-bold uppercase text-[18px] w-fit lg:w-auto"
        >
          ROADMAP
        </a>
        <a
          href="/"
          className="cursor-pointer lg:text-white text-black xl:text-lg lg:text-[14px] font-bold uppercase text-[18px] w-fit lg:w-auto"
        >
          TEAM
        </a>
        <a
          href="/"
          className="cursor-pointer lg:text-white text-black xl:text-lg lg:text-[14px] font-bold uppercase text-[18px] w-fit lg:w-auto"
        >
          FAQ’S
        </a>

        <div className="w-full ">
          <button className="w-full mt-5 lg:hidden block py-[10px] px-[18px] rounded-[35px] font-display text-[14px] bg-yellow-red-gradient text-white capitalize font-black">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="xl:py-[18px] sm:py-[10px] py-[8px] xl:px-[32px] sm:px-[18px] px-[14px] rounded-[35px] font-display xl:text-xl text-[11px] sm:text-[14px] bg-yellow-red-gradient text-white capitalize font-black">
          Connect Wallet
        </button>

        <button
          className="lg:hidden block cursor-pointer text-[25px] sm:text-[30px]"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <GiHamburgerMenu color="white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
