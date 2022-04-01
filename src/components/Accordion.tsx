import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Accordion({ title, desc }: { title: string; desc: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const accordionBodyRef = useRef<HTMLDivElement>(null);

  const toggler = () => {
    if (accordionBodyRef!.current!.clientHeight === 0) {
      accordionBodyRef!.current!.style!.height =
        accordionBodyRef?.current?.scrollHeight + "px";
      setOpen(true);
    } else {
      accordionBodyRef!.current!.style!.height = 0 + "px";
      setOpen(false);
    }
  };

  return (
    <div className="bg-grayBlue rounded-[20px]">
      <button
        className="flex justify-between items-center w-full py-4 lg:py-5 px-8 lg:px-14 pr-4 lg:pr-6 space-x-6 text-left"
        onClick={toggler}
      >
        <h1 className="text-[16px] sm:text-[18px] lg:text-[20px] font-display font-[700] text-white">
          {title}
        </h1>

        <div className="flex justify-center items-center bg-[#222234] min-w-[40px] min-h-[40px] lg:w-[76px] lg:h-[72px] rounded-[12px]">
          <span
            className={`transition-all text-[20px] lg:text-[30px] duration-[.3s] ease-[ease] ${
              open ? "rotate-[180deg]" : "rotate-0"
            }`}
          >
            <IoIosArrowDown color="white" />{" "}
          </span>
        </div>
      </button>

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s] ease-[ease]"
        ref={accordionBodyRef}
      >
        <div className=" lg:pb-10 pb-6 px-8 lg:px-14">
          <p className="text-base font-roboto text-white opacity-[.5] font-normal">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
