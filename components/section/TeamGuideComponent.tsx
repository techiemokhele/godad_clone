"use client";

import Image from "next/image";
import WhyUsGuideComponent from "./bottom/WhyUsGuideComponent";

const TeamGuideComponent = () => {
  return (
    <section
      id="contact"
      className="relative h-[60vh] w-full flex flex-col md:flex-row"
    >
      {/* tablet & desktop */}
      <div className="flex flex-row px-4 gap-0 w-full bg-gradient-to-l from-purple-200 to-purple-800">
        <div className="flex flex-col w-1/3 md:lg:w-1/6 lg:w-1/6 gap-1 text-white-1 pt-6">
          <h1 className="text-[10px] md:text-sm lg:text-sm font-semibold">
            Kimberly Smith
          </h1>
          <p className="text-[8px] md:text-xs lg:text-xs">
            GoDad Sales Manager
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-start items-start">
          <Image
            priority
            src="/images/team.png"
            alt="team-member-image"
            width={1000}
            height={1000}
            className="relative w-full h-full object-cover"
          />
        </div>

        <div className="hidden md:block lg:block md:w-1/3 lg:w-1/3 gap-4 px-1">
          <WhyUsGuideComponent isMobile={false} />
        </div>
      </div>

      {/* mobile bottom section*/}
      <div className="md:hidden lg:hidden block">
        <WhyUsGuideComponent isMobile={true} />
      </div>
    </section>
  );
};

export default TeamGuideComponent;
