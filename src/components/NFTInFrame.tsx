import React from "react";
import nftFrame from "assets/images/nftFrame.png";

function NFTInFrame({
  img,
  frame,
  frameWidth = "w-[195px]",
  frameHeight = "h-[auto]",
  imgWidth = "w-[127px]",
  imgHeight = "h-[auto]",
}: {
  img: any;
  frame: any;
  frameWidth?: string;
  frameHeight?: string;
  imgWidth?: string;
  imgHeight?: string;
}) {
  return (
    <div className="relative">
      <img src={frame} className={`${frameWidth} ${frameHeight}`} alt="" />
      <img
        src={img}
        className={`absolute top-[51%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${imgWidth} ${imgHeight}`}
        alt=""
      />
    </div>
  );
}

export default NFTInFrame;
