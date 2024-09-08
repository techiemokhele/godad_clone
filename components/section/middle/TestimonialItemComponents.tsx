"use client";

import { renderStars } from "@/libs/hooks/starRatings";
import { TestimonialDataItemProps } from "@/types";

import { useState } from "react";

const TestimonialItemComponents = ({
  data,
}: {
  data: TestimonialDataItemProps[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex-none w-72 p-4 rounded-lg ${
              activeIndex === index
                ? "opacity-100 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                : "opacity-60 bg-black/30"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <h5 className="text-xs md:text-sm lg:text-md text-white font-bold">
              {item.title}
            </h5>

            <div className="flex flex-col gap-1 py-3">
              <p className="text-yellow-500 font-bold">{item.rating}</p>
              <span className="text-yellow-500 font-bold flex-row flex">
                {renderStars(item.rating)}
              </span>
            </div>

            <p className="text-xs md:text-md lg:text-md text-white-1">
              {item.description}
            </p>
            <div className="flex justify-end items-center mt-2">
              <span className="text-sm text-white-1 italic">
                - {item.author}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {data.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialItemComponents;
