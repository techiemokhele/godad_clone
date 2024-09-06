import ButtonComponent from "@/components/common/ButtonComponent";
import Image from "next/image";

const TopHomeLeftSideComponent = () => {
  const handleLearnMore = () => {
    console.log("Learn more");
  };

  return (
    <div className="relative h-[50vh] w-full flex justify-center items-center">
      <div className="flex flex-row justify-between gap-6 w-full">
        <div className="w-full p-6 justify-center items-center">
          <div className="relative z-10 flex flex-col items-start gap-2 w-2/3 md:w-3/4 px-0 md:px-3 pt-2 md:pt-4">
            <p className="uppercase text-white text-[8px] text-center px-2 py-1 rounded-md bg-gray-3 mb-2">
              new
            </p>

            <Image
              priority
              src="/icons/logo-no-background.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-1/3 md:w-1/4 lg:w-1/6"
            />

            <h3 className="text-black-1 text-2xl md:text-3xl font-extrabold py-1">
              Put your domain into action using AI.
            </h3>

            <p className="text-black-1 text-[10px]">
              Purchase a new domain and receive GoDad AI, a personalised
              AI-powered solution for delivering a website, logo, and more.
            </p>

            <ButtonComponent
              type="button"
              text="Learn more"
              onClick={handleLearnMore}
              decoration="primary"
              rounded={false}
              primaryDark={true}
              hoverShowIcon={true}
            />
          </div>
        </div>

        <div
          className="w-full absolute inset-0 bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: `url("/images/leftTopBanner.jpg")`,
            objectFit: "fill",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TopHomeLeftSideComponent;
