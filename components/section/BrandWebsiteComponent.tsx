"use client";

import { brandingData } from "@/data/brandingData";
import { useWindowSize } from "@/libs/hooks/useWindowSize";

import BrandWebsiteInfoClickComponent from "./middle/BrandWebsiteInfoClickComponent";
import BrandWebsiteInfoSwipeComponent from "./middle/BrandWebsiteInfoSwipeComponent";

const BrandWebsiteComponent = () => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  const brandingInfo = brandingData;

  return (
    <div className="flex flex-col gap-6 justify-center items-center text-white-1">
      <h1 className="text-2xl font-semibold text-center">
        Develop your brand through marketing and websites.
      </h1>
      <div className="flex flex-col px-4 sm:px-8 lg:px-16 w-full">
        {isLargeScreen ? (
          <div className="lg:mx-28">
            <BrandWebsiteInfoClickComponent data={brandingInfo} />
          </div>
        ) : (
          <BrandWebsiteInfoSwipeComponent data={brandingInfo} />
        )}
      </div>
    </div>
  );
};

export default BrandWebsiteComponent;
