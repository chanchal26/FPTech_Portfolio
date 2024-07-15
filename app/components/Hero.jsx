import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { IoIosSquare } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <>

      
      <section className="bg-[#F0F4FF] text-gray-800">
        {/* <div className="-rotate-90">
          <Link href="#" className="hover:text-[#684DF4]">FACEBOOK <IoIosSquare className="text-[#684DF4] inline-flex mx-5"/></Link>
          <Link href="#" className="hover:text-[#684DF4]">TWITTER <IoIosSquare className="text-[#684DF4] inline-flex mx-5"/></Link>
          <Link href="#" className="hover:text-[#684DF4]">INSTAGRAM <IoIosSquare className="text-[#684DF4] inline-flex mx-5"/></Link>
          <Link href="#" className="hover:text-[#684DF4]">LINKEDIN </Link>
        </div> */}
        <div className="max-w-7xl container mx-auto flex flex-col items-center justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="leading-3 text-2xl pb-5 text-[#684DF4]">BEST MARKETING SERVICE</p>
            <h1 className="text-5xl font-bold sm:text-6xl">
                Make The Easiest
                Solution For You
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-500">
            Energistically harness ubiquitous imperatives without state of the art collaboration and
              <br className="hidden md:inline lg:hidden" />
              idea-sharing. Monotonectally parallel task cross-unit experiences and front-end.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                
                href="#"
                className="px-8 py-3 mr-4 text-lg font-medium rounded bg-[#684DF4] text-white hover:bg-gray-900 transition-colors duration-700"
              >
                ABOUT US{" "} 
                <FaArrowRight className="inline-flex mb-1 ml-1" />
              </a>
                
              <a
                
                href="#"
                className="p-4 text-lg font-medium rounded-full text-white bg-[#684DF4] hover:bg-gray-900 transition-colors duration-700"
              >
                <FaPlay className="pl-1"/>
              </a>
              <div>
                <Link href="#" className="text-lg font-semibold hover:text-[#684DF4] transition-colors duration-700">Watch Our Story</Link>
                <p className="text-gray-500">Subscribe Now</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            
            <Image
                src="/strategy-development.png"
                className="drop-shadow-md"
                width={600}
                height={500}
                alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
