import React from "react";

function SocialIcon({
  icon,
  link,
  target = "_self",
  width = "w-[25px]",
  height = "h-[25px]",
}: {
  icon: any;
  link?: string;
  target?: string;
  width?: string;
  height?: string;
}) {
  return (
    <a
      href={link}
      target={target}
      className={`${width} ${height} bg-white rounded-full flex items-center justify-center cursor-pointer`}
    >
      {icon}
    </a>
  );
}

export default SocialIcon;
