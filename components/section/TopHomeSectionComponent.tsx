"use client";

import TopHomeLeftSideComponent from "./top/TopHomeLeftSideComponent";
import TopHomeRightSideComponent from "./top/TopHomeRightSideComponent";

const TopHomeSectionComponent = () => {
  return (
    <section
      id="banner"
      className="flex md:flex-row flex-col justify-between gap-6 w-full md:px-10 px-6 pt-20"
    >
      <div className="w-full bg-red-600 rounded-xl">
        <TopHomeLeftSideComponent />
      </div>

      <div className="w-1/3 bg-red-600">
        <TopHomeRightSideComponent />
      </div>
    </section>
  );
};

export default TopHomeSectionComponent;
