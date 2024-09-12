"use client";

import { useState, useEffect  } from "react";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";
import {
  aboutGoDadLinks,
  supportLinks,
  resourcesLink,
  partnerLinks,
  accountLinks,
  shoppingLinks,
} from "@/data/navigationData";

const FooterLinkItemsComponent = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component only runs in the client environment
    setIsClient(typeof window !== "undefined");
  }, []);

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 md:gap-4 lg:gap-0 gap-6">
      {/* About GoDad */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h3
            className="text-white-1 text-md font-semibold cursor-pointer md:cursor-auto"
            onClick={() => handleToggle("about")}
          >
            About GoDad
          </h3>

          <span className="block md:hidden lg:hidden">
            {openSection === "about" ? <TbMinus /> : <GoPlus />}
          </span>
        </div>
        <div
          className={`${
            openSection === "about" || (isClient && window.innerWidth >= 768)
              ? "block"
              : "hidden"
          } md:block`}
        >
          {aboutGoDadLinks.map((link) => (
            <ul
              key={link.href}
              className="flex py-1 text-white-1 text-xs cursor-pointer hover:underline"
            >
              <li>{link.label}</li>
            </ul>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h3
            className="text-white-1 text-md font-semibold cursor-pointer md:cursor-auto"
            onClick={() => handleToggle("support")}
          >
            Support
          </h3>

          <span className="block md:hidden lg:hidden">
            {openSection === "support" ? <TbMinus /> : <GoPlus />}
          </span>
        </div>
        <div
          className={`${
            openSection === "support" || (isClient && window.innerWidth >= 768)
              ? "block"
              : "hidden"
          } md:block`}
        >
          {supportLinks.map((link) => (
            <ul
              key={link.href}
              className="flex py-1 text-white-1 text-xs cursor-pointer hover:underline"
            >
              <li>{link.label}</li>
            </ul>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h3
            className="text-white-1 text-md font-semibold cursor-pointer md:cursor-auto"
            onClick={() => handleToggle("resources")}
          >
            Resources
          </h3>
          <span className="block md:hidden lg:hidden">
            {openSection === "resources" ? <TbMinus /> : <GoPlus />}
          </span>
        </div>
        <div
          className={`${
            openSection === "resources" ||
            (isClient && window.innerWidth >= 768)
              ? "block"
              : "hidden"
          } md:block`}
        >
          {resourcesLink.map((link) => (
            <ul
              key={link.href}
              className="flex py-1 text-white-1 text-xs cursor-pointer hover:underline"
            >
              <li>{link.label}</li>
            </ul>
          ))}
        </div>
      </div>

      {/* Partner Programs */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h3
            className="text-white-1 text-md font-semibold cursor-pointer md:cursor-auto"
            onClick={() => handleToggle("partners")}
          >
            Partner Programs
          </h3>
          <span className="block md:hidden lg:hidden">
            {openSection === "partners" ? <TbMinus /> : <GoPlus />}
          </span>
        </div>
        <div
          className={`${
            openSection === "partners" || (isClient && window.innerWidth >= 768)
              ? "block"
              : "hidden"
          } md:block`}
        >
          {partnerLinks.map((link) => (
            <ul
              key={link.href}
              className="flex py-1 text-white-1 text-xs cursor-pointer hover:underline"
            >
              <li>{link.label}</li>
            </ul>
          ))}
        </div>
      </div>

      {/* Account */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h3
            className="text-white-1 text-md font-semibold cursor-pointer md:cursor-auto"
            onClick={() => handleToggle("account")}
          >
            Account
          </h3>

          <span className="block md:hidden lg:hidden">
            {openSection === "account" ? <TbMinus /> : <GoPlus />}
          </span>
        </div>
        <div
          className={`${
            openSection === "account" || (isClient && window.innerWidth >= 768)
              ? "block"
              : "hidden"
          } md:block`}
        >
          {accountLinks.map((link) => (
            <ul
              key={link.href}
              className="flex py-1 text-white-1 text-xs cursor-pointer hover:underline"
            >
              <li>{link.label}</li>
            </ul>
          ))}
        </div>
      </div>

      {/* Shopping */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h3
            className="text-white-1 text-md font-semibold cursor-pointer md:cursor-auto"
            onClick={() => handleToggle("shopping")}
          >
            Shopping
          </h3>
          <span className="block md:hidden lg:hidden">
            {openSection === "shopping" ? <TbMinus /> : <GoPlus />}
          </span>
        </div>
        <div
          className={`${
            openSection === "shopping" || (isClient && window.innerWidth >= 768)
              ? "block"
              : "hidden"
          } md:block`}
        >
          {shoppingLinks.map((link) => (
            <ul
              key={link.href}
              className="flex py-1 text-white-1 text-xs cursor-pointer hover:underline"
            >
              <li>{link.label}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinkItemsComponent;
