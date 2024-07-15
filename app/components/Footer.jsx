import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaCalendarAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#080E1C] text-white body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center border-b-2 border-[#684DF4]">
              <span className="text-xl">ABOUT COMPANY</span>
            </a>
            <p className="mt-2 text-md text-gray-500 leading-relaxed">
              Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered. cost
              effective users via team driven.
            </p>
            <div className="flex flex-col justify-center pt-6 lg:pt-0">
              <div className="flex justify-center space-x-4 pt-5">
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center border hover:bg-[#684DF4] transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 text-gray-50"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center border hover:bg-[#684DF4] transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 text-gray-50"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                  className="flex items-center justify-center border hover:bg-[#684DF4] transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 text-gray-50"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  title="Whatsapp"
                  className="flex items-center justify-center border hover:bg-[#684DF4] transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 text-gray-50"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="#"
                  title="Youtube"
                  className="flex items-center justify-center border hover:bg-[#684DF4] transition-colors duration-300 w-8 h-8 rounded-full sm:w-10 sm:h-10 text-gray-50"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-xl mb-3 border-b-2 border-[#684DF4]">
                QUICK LINKS
              </h2>
              <div className="list-none mb-10 leading-10">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Meet Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Help & FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-xl mb-3 border-b-2 border-[#684DF4]">
                IT SERVICES
              </h2>
              <div className="list-none mb-10 leading-10">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Business Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Product Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#684DF4] transition-colors duration-300"
                  >
                    Cloud services
                  </Link>
                </li>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-xl mb-3 border-b-2 border-[#684DF4]">
                RECENT POSTS
              </h2>
              <div className="list-none mb-10 space-y-5">
                <li>
                  <Link href="#" className="flex justify-center space-x-3">
                    <img
                      src="https://placehold.co/600x600"
                      alt=""
                      className="w-20 h-20 bg-center bg-cover rounded-md hover:scale-125 duration-500"
                    />
                    <div>
                      <p className="leading-tight hover:text-[#684DF4] transition-colors duration-300">Unsatiable Entreaties May Collecting Power.</p>
                      <p
                        className="flex items-center py-2 space-x-1 text-sm"
                      >
                        <FaCalendarAlt className="text-[#684DF4]"/>
                        <span className="hover:text-[#684DF4] transition-colors duration-300">21 June, 2024</span>
                        
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex justify-center space-x-3">
                    <img
                      src="https://placehold.co/600x600"
                      alt=""
                      className="w-20 h-20 bg-center bg-cover rounded-md hover:scale-125 duration-500"
                    />
                    <div>
                      <span className="leading-tight hover:text-[#684DF4] transition-colors duration-300">Unsatiable Entreaties May Collecting Power.</span>
                      <p
                        className="flex items-center py-2 space-x-1 text-sm"
                      >
                        <FaCalendarAlt className="text-[#684DF4]"/>
                        <span className="hover:text-[#684DF4] transition-colors duration-300">21 June, 2024</span>
                        
                      </p>
                    </div>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#684DF4] text-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">
              Copyright © 2024{" "}
              <Link
                href="#"
                className="hover:text-gray-700  transition-colors duration-300"
              >
                FPTech
              </Link>
              . All Rights Reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link
                href="#"
                className="pr-3 border-r-2 hover:text-gray-700  transition-colors duration-300"
              >
                Terms & Condition
              </Link>
              <Link
                href="#"
                className="px-3 border-r-2 hover:text-gray-700  transition-colors duration-300"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="ml-3 hover:text-gray-700  transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
