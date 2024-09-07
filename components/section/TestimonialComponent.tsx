import { FaStarHalfAlt } from "react-icons/fa";

import { testimonialData } from "@/data/testimonialData";
import { renderStars } from "@/libs/hooks/starRating";
import TestimonialItemComponent from "./middle/TestimonialItemComponent";

const TestimonialComponent = () => {
  const currentData = testimonialData;

  return (
    <section
      id="testimonial"
      className="flex flex-col gap-6 text-white-1 justify-start items-start"
    >
      <h1 className="text-3xl md:text-4xl font-semibold w-3/5 md:px-10 lg:px-16 px-4">
        We are trusted by more than 20 million clients globally.
      </h1>

      <div className="max-w-[100vw]">
        <TestimonialItemComponent data={currentData} />
      </div>

      <div className="flex flex-col px-8 gap-3">
        <div className="flex flex-row gap-2 items-center">
          <FaStarHalfAlt size={25} className="text-yellow-500" />
          <h1 className="text-2xl font-extrabold">Safetypilot</h1>
        </div>

        <div className="flex flex-row gap-1">{renderStars(4.5)}</div>

        <p className="text-xs">
          4.5 stars out of 5 based on 1,236,973 reviews <br />
          Displaying our reviews with ratings of 4 and 5.
        </p>
      </div>
    </section>
  );
};

export default TestimonialComponent;
