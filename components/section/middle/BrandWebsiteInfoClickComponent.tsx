/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BrandingDataItemProps } from "@/types";

const BrandWebsiteInfoClickComponent = ({
  data,
}: {
  data: BrandingDataItemProps[];
}) => {
  const [selectedImage, setSelectedImage] = useState(data[0].avatar);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    setIsImageVisible(false);
    const timer = setTimeout(() => {
      setIsImageVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedImage]);

  const handleItemHover = (avatar: string) => {
    setHoveredImage(avatar);
    setSelectedImage(avatar);
  };

  const handleItemClick = (avatar: string) => {
    setSelectedImage(avatar);
  };

  const handleItemLeave = () => {
    setHoveredImage(null);
    // If you don't want to revert to the clicked image when not hovering,
    // comment the next line:
    setSelectedImage((prevSelectedImage) => prevSelectedImage);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full h-[50vh] rounded-lg overflow-hidden">
        <Image
          priority
          src={selectedImage}
          alt="Selected branding image"
          width={1000}
          height={1000}
          className={`h-full w-full rounded-lg object-cover transition-opacity duration-300 ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 text-white-1">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 w-full p-4 hover:bg-gray-2 rounded-lg cursor-pointer transition-colors duration-300"
            onClick={() => handleItemClick(item.avatar)}
            onMouseEnter={() => handleItemHover(item.avatar)}
            onMouseLeave={handleItemLeave}
          >
            <h1 className="text-sm font-bold">{item.title}</h1>
            <p className="text-[10px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandWebsiteInfoClickComponent;
