import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section id="services" class="text-gray-900 body-font">
        <div class="container py-24 mx-auto max-w-7xl">
          <div class=" flex flex-col sm:flex-row sm:items-center items-start justify-between mx-auto">
            <div>
              <p className="leading-3 text-xl text-[#684DF4]">
                <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
                WHAT WE DO
              </p>
              <h1 className="text-3xl font-bold py-5">
                We Provide Exclusive Service
                <br /> For{" "}
                <span className="text-[#684DF4] font-medium">
                  Your Business
                </span>
              </h1>
            </div>
            <button className=" text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
              VIEW ALL SERVICES{" "}
              <FaArrowRight className="inline-flex mb-1 ml-1" />
            </button>
          </div>
          {/* card */}

          <section>
            <div class="relative py-12 sm:px-6 lg:py-16">
              <div class="relative mx-auto max-w-7xl">
                <div class="grid max-w-lg gap-5 mx-auto md:grid-cols-2 md:max-w-none lg:grid-cols-4 lg:max-w-none">
                  <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div class="flex-shrink-0">
                      <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div class="flex flex-col justify-center flex-1 p-3 bg-white">
                      <div class="flex-1 text-center">
                        <a href="#" class="block mt-2">
                          <p class="text-xl font-semibold text-gray-900">
                            Web Development
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div class="flex-shrink-0">
                    <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div class="flex flex-col justify-center flex-1 p-3 bg-white">
                      <div class="flex-1 text-center">
                        <a href="#" class="block mt-2">
                          <p class="text-xl font-semibold text-gray-900">
                            UI/UX Design
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div class="flex-shrink-0">
                    <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div class="flex flex-col justify-center flex-1 p-3 bg-white">
                      <div class="flex-1 text-center">
                        <a href="#" class="block mt-2">
                          <p class="text-xl font-semibold text-gray-900">
                            Digital Marketing
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div class="flex-shrink-0">
                    <Image
                      src="/meeting2.jpg"
                      width={500}
                      height={500}
                      alt="Picture of services card"
                      />
                    </div>
                    <div class="flex flex-col justify-center flex-1 p-3 bg-white ">
                      <div class="flex-1 text-center">
                        <a href="#" class="block mt-2">
                          <p class="text-xl font-semibold text-gray-900">
                            Software Services
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            Globally optimize highly efficient solution whereas
                            open-source application. Completely strategize
                            quality internal or organic sources for virtual
                            e-business.
                          </p>
                        </a>
                        <button className=" text-white bg-indigo-500 border-0 mt-3 py-2 px-4 focus:outline-none hover:bg-gray-900 transition-colors duration-700 rounded">
                        READ MORE{" "}
                        <FaArrowRight className="inline-flex mb-1 ml-1" />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Services;
