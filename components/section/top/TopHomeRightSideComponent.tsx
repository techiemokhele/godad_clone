import ButtonComponent from "@/components/common/ButtonComponent";

const TopHomeRightSideComponent = () => {
  const handleAiDomainSearch = () => {
    console.log("Try searching...");
  };

  return (
    <div className="flex flex-col h-[50vh] justify-center items-center py-4 px-2 gap-2">
      <p className="uppercase text-[8px] text-black-1 bg-teal-300 rounded-md px-2 py-1">
        New
      </p>
      <p className="capitalize text-[8px] text-white-1 pt-1">
        Get Suggested AI Domains
      </p>
      <p className="capitalize text-xl text-white-1 text-center font-extrabold py-4">
        Use AI to find the ideal domain name and company name.
      </p>

      <ButtonComponent
        type="button"
        text="AI Search for Domain"
        onClick={handleAiDomainSearch}
        decoration="primary"
        rounded={false}
        primaryDark={false}
        hoverShowIcon={true}
      />
    </div>
  );
};

export default TopHomeRightSideComponent;
