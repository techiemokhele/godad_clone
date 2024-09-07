"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { IoIosArrowRoundForward, IoIosClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

import { topNavLeftLinks, topNavRightLinks } from "@/data/navigationData";
import { handleScroll } from "@/libs/utils/handleScroll";

const TopbarNavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed w-full z-20 ${
        scrolled ? "bg-gray-3" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="flex flex-col">
        <div className="relative flex items-center justify-start gap-4 px-6 md:px-6 h-16 bg-gray-4">
          {/* desktop menu button */}
          <div className="flex flex-row justify-between items-center w-full">
            <div className="z-10">
              <Link href="/" passHref>
                <Image
                  className="flex-shrink-0 h-[35px] w-auto absolute left-4 bottom-4"
                  width={1000}
                  height={1000}
                  src="/icons/logo-no-background.png"
                  alt="godad-logo"
                />
              </Link>

              <div className="ml-28 hidden md:block flex-row gap-3">
                <div className="hidden md:block items-center pb-1">
                  {topNavLeftLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) =>
                        handleScroll(e, link.href, isOpen, toggleMenu)
                      }
                      className={`px-3 py-2 rounded-md text-[10px] font-thin text-white cursor-pointer`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right section: Cart and Sign In for desktop */}
            <div className="hidden md:block flex-row">
              <div className="flex flex-row gap-0 pt-1">
                {topNavRightLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) =>
                      handleScroll(e, link.href, isOpen, toggleMenu)
                    }
                    className={`px-3 py-2 rounded-md text-[10px] font-thin text-white cursor-pointer`}
                  >
                    {link.label === "cart" ? (
                      <div className="flex flex-row gap-4">
                        <span> | </span>
                        <MdOutlineShoppingCart size={16} />
                      </div>
                    ) : (
                      <span className="items-center">{link.label} </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`sm:hidden bg-gray-4 fixed top-0 right-0 h-full w-1/2 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out text-white-1`}
      >
        <div className="flex justify-end p-4 pb-6">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <IoIosClose size={30} color="#ffffff" />
          </button>
        </div>

        <div className="px-2 pt-2 pb-3 space-y-1">
          {topNavLeftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href, isOpen, toggleMenu)}
              className={`flex-row block px-3 py-3 rounded-md text-xs cursor-pointer gap-3`}
            >
              <div className="flex flex-row gap-2 justify-between items-center ">
                <p>{link.label}</p>
                <p className="animate-bounce">
                  <IoIosArrowRoundForward size={20} />
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="absolute bottom-10 block px-4 pt-40">
          <div className="flex flex-col gap-3 text-[10px]">
            <div className="flex flex-row gap-2 items-center">
              <span className={`cursor-pointer`}>Help Center</span>
            </div>
            <div className="flex flex-row items-center">
              <span className={`cursor-pointer`}>Account</span>
            </div>
            <div className="flex flex-row items-center">
              <span className={`cursor-pointer`}>Basket</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopbarNavigationComponent;
