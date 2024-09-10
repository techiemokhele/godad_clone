import Image from "next/image";

import { PiMagnifyingGlassLight } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";

const RetainCustomerInfoItemComponents = () => {
  return (
    <div
      className="relative h-[50vh] md:h-[70vh] lg:h-[70vh] w-full bg-cover bg-center rounded-lg lg:px-52"
      style={{ backgroundImage: "url('/images/retainBanners.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="flex flex-col absolute inset-0 items-center justify-center gap-6 px-2 md:px-6 lg:px-16">
        <div className="flex flex-col h-[35vh] md:h-[50vh] lg:h-[50vh] bg-white-1 font-semibold text-black-1 px-2 md:px-4 lg:px-4 py-4 w-1/2 absolute right-6 rounded-xl gap-10">
          <p className="text-xs md:text-lg lg:text-xl flex flex-row">
            &quot;For those who may lack technical skills but have a concept of
            what they want to construct, GoDad&lsquo;s Website Builder is
            incredibly helpful.&quot;
          </p>

          <div className="flex flex-row gap-2 md:gap-4 lg:gap-4 bottom-4 absolute h-[30vh] w-full">
            <div className="text-[10px] md:text-sm lg:text-sm w-1/2 md:w-1/3 lg:w-1/3 px-0 md:px-2 lg:px-2 py-0 flex flex-col justify-end items-start">
              <p className="">Items used by</p>
              <p className="font-bold">Solution Creators</p>

              <div className="flex flex-col gap-2 items-start">
                <div className="flex flex-row gap-2 pt-10 justify-center items-center">
                  <div className="flex justify-center items-center bg-gray-600 rounded-full p-1">
                    <PiMagnifyingGlassLight
                      className="text-white-1"
                      size={12}
                    />
                  </div>
                  <p>Domain</p>
                </div>

                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="flex justify-center items-center bg-gray-600 rounded-full p-1">
                    <GrCertificate className="text-white-1" size={12} />
                  </div>
                  <p>SSL Certificates</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 md:w-1/2 lg:w-1/2 flex flex-col justify-end">
              <Image
                priority
                src="https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="banner-img"
                width={1000}
                height={1000}
                className="w-full lg:h-36 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetainCustomerInfoItemComponents;
