import TopHomeLeftSideComponent from "./top/TopHomeLeftSideComponent";
import TopHomeRightSideComponent from "./top/TopHomeRightSideComponent";

const TopHomeSectionComponent = () => {
  return (
    <section
      id="banner"
      className="flex flex-row justify-between gap-6 w-full px-10 pt-20"
    >
      <div className="w-full bg-red-600">
        <TopHomeLeftSideComponent />
      </div>

      <div className="w-1/3 bg-red-600">
        <TopHomeRightSideComponent />
      </div>
    </section>
  );
};

export default TopHomeSectionComponent;
