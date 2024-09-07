"use client";

import TopHomeLeftSideComponent from "./top/TopHomeLeftSideComponent";
import TopHomeRightSideComponent from "./top/TopHomeRightSideComponent";

const TopHomeSectionComponent = () => {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col justify-between gap-6 w-full md:px-10 px-6 pt-20"
    >
      <div className="w-full md:w-2/3 rounded-xl">
        <TopHomeLeftSideComponent />
      </div>

      <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-4 rounded-xl">
        <TopHomeRightSideComponent />
      </div>
    </section>
  );
};

export default TopHomeSectionComponent;
