import Image from "next/image";
import Link from "next/link";
import { IoChevronUp } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import FooterLinkItemsComponent from "./FooterLinkItemsComponent";

const BottomNavigationComponent = () => {
  return (
    <footer className="flex flex-col w-full pt-6">
      {/* top support section */}
      <div className="flex flex-col justify-center items-center p-4 bg-cream-3 w-full">
        <p className="text-black-1 text-sm text-center">
          In need of assistance? Give our renowned support staff a call at 064
          847 3363.
        </p>
      </div>

      {/* top ICANN section */}
      <div className="flex flex-col justify-center items-center p-4 bg-gray-4 w-full">
        <p className="text-white text-sm text-center">
          Prices do not include ICANN fees or any taxes.
        </p>
      </div>

      <div className="w-full flex border-[1px] border-white-1"></div>

      {/* desktop section */}
      <div className="flex flex-col gap-4 px-8">
        {/* bottom link section */}
        <div className="flex flex-col pt-6">
          <FooterLinkItemsComponent />
        </div>

        {/* bottom social section (web & tablet) */}
        <div className="hidden md:block lg:block flex flex-row w-full justify-between">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <Image
                priority
                src="/icons/logo-no-background.png"
                alt="logo-image"
                width={1000}
                height={1000}
                className="w-20 h-16 object-contain"
              />

              <div className="flex flex-row items-center gap-2">
                <p className="text-white text-md">South Africa - English</p>
                <span className="cursor-pointer">
                  <IoChevronUp />
                </span>
              </div>

              <div className="flex flex-row items-center gap-2">
                <p className="text-white text-md">ZAR R</p>
                <span className="cursor-pointer">
                  <IoChevronUp />
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <Link href="https://facebook.com">
                <FaFacebook />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram />
              </Link>
              <Link href="https://youtube.com">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile logo section */}
      <div className="px-8 sm:block md:hidden lg:hidden flex flex-row gap-6 items-center pt-4">
        <Image
          priority
          src="/icons/logo-no-background.png"
          alt="logo-image"
          width={1000}
          height={1000}
          className="w-20 h-16 object-contain"
        />
      </div>

      <div className="w-full flex border-[1px] border-white-1"></div>

      {/* mobile bottom section */}
      <div className="sm:block md:hidden lg:hidden flex py-8 gap-10 flex-row justify-center items-center">
        <div className="flex flex-row items-center gap-2">
          <p className="text-white text-md">South Africa - English</p>
          <span className="cursor-pointer">
            <IoChevronUp />
          </span>
        </div>

        <div className="flex flex-row items-center gap-2">
          <p className="text-white text-md">ZAR R</p>
          <span className="cursor-pointer">
            <IoChevronUp />
          </span>
        </div>
      </div>

      <div className="px-8 sm:block md:hidden lg:hidden flex flex-row gap-4 justify-between items-center">
        <Link href="https://facebook.com">
          <FaFacebook />
        </Link>
        <Link href="https://instagram.com">
          <FaInstagram />
        </Link>
        <Link href="https://youtube.com">
          <FaYoutube />
        </Link>
      </div>

      <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between p-8">
        <div className="flex flex-col gap-4 text-white-1 text-xs md:w-2/3 lg:w-2/3 w-full text-center md:text-start lg:text-start">
          <p>
            All rights reserved by GoDad Operating Company, Pty, 2024. Copyright
            2020 All Rights Reserved. In South Africa and other nations, GoDad
            Operating Company, Pty is the registered trademark holder of the
            GoDad word mark. In South Africa, GoDad Clone, Pty is the registered
            trademark holder of the &quot;Dad&quot; logo.
          </p>
          <p>
            The express terms of use apply to the use of this website. You
            acknowledge that by using this website, you accept these Universal
            Terms of Service.
          </p>
        </div>

        <div className="flex flex-row items-start justify-start gap-3 text-white text-xs md:pb-0 lg:pb-0 pb-6">
          <p className="cursor-pointer hover:underline">Legal</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default BottomNavigationComponent;
