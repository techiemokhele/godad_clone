import React, { useState } from "react";
import Image from "next/image";
import { BrandingDataItemProps } from "@/types";

const BrandWebsiteInfoSwipeComponent = ({
  data,
}: {
  data: BrandingDataItemProps[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${data.length * 100}%`,
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-full flex-shrink-0 px-4"
          >
            <Image
              priority
              src={item.avatar}
              alt={item.title}
              width={1000}
              height={1000}
              className="h-full rounded-lg object-cover"
            />
            <div className="absolute bottom-6 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg md:w-1/4 w-1/3 leading-none px-10 z-10">
              <h2 className="text-white md:text-lg text-xl font-bold pb-3 w-5/6 leading-none">
                {item.title}
              </h2>
              <p className="text-white md:text-xs text-[10px] pr-20">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={handleNext}
      >
        &#8594;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-teal-1" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BrandWebsiteInfoSwipeComponent;
