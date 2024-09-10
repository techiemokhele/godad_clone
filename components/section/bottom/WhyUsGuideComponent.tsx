import Image from "next/image";

import ButtonComponent from "@/components/common/ButtonComponent";

const WhyUsGuideComponent = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={`w-full gap-4 px-8 md:px-2 lg:px-2 ${
        isMobile ? "bg-cream-2 py-4" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row gap-1 items-center text-black-1">
        <Image
          priority
          src={`/icons/logo-no-background.svg`}
          alt="team-member-image"
          width={1000}
          height={1000}
          className="relative w-20 h-20 object-contain"
        />
        <p className="text-sm font-thin">Support</p>
      </div>

      <div className="flex flex-col gap-2 text-black-1">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold">
            Why choose to go with GoDad?
          </h2>
          <p className="text-sm">
            Since even the greatest technology is only as good as the humans who
            created it, we know this. We provide knowledgeable, round-the-clock
            phone help in addition to much more because of this.
          </p>
          <p className="text-sm">
            Give our tech support staff a call at 064 847-3363.
          </p>
        </div>

        <div className="pt-2">
          <ButtonComponent
            type="button"
            text="Contact Support"
            onClick={() => console.log("contact support")}
            decoration="primary"
            rounded={false}
            primaryDark={true}
            hoverShowIcon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUsGuideComponent;
