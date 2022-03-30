import React from "react";

function NftCard({ img }: { img: any }) {
  return (
    <div className="w-full">
      <div className="flex bg-bg-red-yellow p-1 rounded-[10px] overflow-hidden mb-5">
        <img src={img} className="w-full flex rounded-[10px]" alt="" />
      </div>

      <button className="text-[20px] font-bold text-white text-center block w-full">
        Purchase
      </button>
    </div>
  );
}

export default NftCard;
