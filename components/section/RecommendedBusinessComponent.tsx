"use client";

import { useState } from "react";
import {
  domainSpecialData,
  recommendedData,
  wordpressData,
} from "@/data/productData";
import ButtonComponent from "../common/ButtonComponent";
import RecommendedBusinessItemsComponent from "./top/RecommendedBusinessItemsComponent";

const RecommendedBusinessComponent = () => {
  const [currentData, setCurrentData] = useState(domainSpecialData);
  const [activeTab, setActiveTab] = useState("domain");

  const domainItem = () => {
    setCurrentData(domainSpecialData);
    setActiveTab("domain");
  };

  const recommendItem = () => {
    setCurrentData(recommendedData);
    setActiveTab("recommend");
  };

  const wordpressItem = () => {
    setCurrentData(wordpressData);
    setActiveTab("wordpress");
  };

  return (
    <section
      id="recommendedBusiness"
      className="flex flex-col items-center justify-center text-white gap-6"
    >
      <h1 className="text-2xl font-semibold text-center">
        What is mostly important for your business currently?
      </h1>

      <div className="flex flex-row gap-3 justify-between">
        <ButtonComponent
          type="button"
          text="Domains"
          onClick={domainItem}
          decoration="primary"
          rounded={true}
          primaryDark={activeTab === "domain"}
          hoverShowIcon={false}
        />
        <ButtonComponent
          type="button"
          text="Recommended"
          onClick={recommendItem}
          decoration="primary"
          rounded={true}
          primaryDark={activeTab === "recommend"}
          hoverShowIcon={false}
        />
        <ButtonComponent
          type="button"
          text="WordPress and Security"
          onClick={wordpressItem}
          decoration="primary"
          rounded={true}
          primaryDark={activeTab === "wordpress"}
          hoverShowIcon={false}
        />
      </div>

      <RecommendedBusinessItemsComponent data={currentData} />
    </section>
  );
};

export default RecommendedBusinessComponent;
