"use client";

import { ButtonProps } from "@/types";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useState } from "react";

const ButtonComponent = ({
  onClick,
  type,
  text,
  decoration,
  rounded,
  primaryDark,
  hoverShowIcon,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-xs px-3 py-2 cursor-pointer flex flex-row justify-between items-center gap-1
        ${rounded ? "rounded-full" : "rounded-lg"} 
        ${
          decoration === "teal"
            ? "bg-teal-1 text-white-1"
            : decoration === "outline"
            ? "bg-transparent border-2 border-gray-200 text-black-1"
            : "bg-black-1 text-white-1"
        }
        ${primaryDark ? "bg-black-1 text-white-1" : "bg-white-1 text-[#111111]"}
        hover:opacity-90 transition-opacity`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}{" "}
      {hoverShowIcon && (
        <IoArrowForwardSharp
          className={`transform transition-transform duration-300 ${
            isHovered
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        />
      )}
    </button>
  );
};

export default ButtonComponent;
