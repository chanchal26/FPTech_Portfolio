import Image from "next/image";
import React from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";

const Skills = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-[#F5F5F5]">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <p className="leading-3 text-xl text-[#684DF4]">
                <LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1" />{" "}
                GREAT IT SKILLS
              </p>
              <h1 className="text-3xl font-bold py-10">
                More Than 24+ Years Experience We Provide{" "}
                <span className="text-[#684DF4] font-medium">IT Solution</span>
              </h1>
              <p className="leading-relaxed">
                Collaboratively envisioneer user friendly supply chains and
                cross unit imperative. Authoritativel fabricate competitive
                resource and holistic. Holisticly restore real time resources
                whereas standardized networks.
              </p>
              <div className="py-5">
                <h1 className="text-sm font-bold text-center">
                  Business Strategy
                </h1>
                <div class="bg-gray-100 rounded-xl shadow-sm overflow-hidden p-1">
                  <div class="relative h-4 flex items-center justify-center">
                    <div class="absolute top-0 bottom-0 left-0 rounded-lg w-[85%] bg-[#684DF4]"></div>
                    <div class="relative text-white font-medium text-sm">
                      85%
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-sm font-bold text-center">
                  Softwer Development
                </h1>
                <div class="bg-gray-100 rounded-xl shadow-sm overflow-hidden p-1">
                  <div class="relative h-4 flex items-center justify-center">
                    <div class="absolute top-0 bottom-0 left-0 rounded-lg w-[95%] bg-[#684DF4]"></div>
                    <div class="relative text-white font-medium text-sm">
                      95%
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <h1 className="text-sm font-bold text-center">
                  Cyber Security
                </h1>
                <div class="bg-gray-100 rounded-xl shadow-sm overflow-hidden p-1">
                  <div class="relative h-4 flex items-center justify-center">
                    <div class="absolute top-0 bottom-0 left-0 rounded-lg w-[80%] bg-[#684DF4]"></div>
                    <div class="relative text-white font-medium text-sm">
                      80%
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <h1 className="text-sm font-bold text-center">
                  Artificial Intelligence
                </h1>
                <div class="bg-gray-100 rounded-xl shadow-sm overflow-hidden p-1">
                  <div class="relative h-4 flex items-center justify-center">
                    <div class="absolute top-0 bottom-0 left-0 rounded-lg w-[90%] bg-[#684DF4]"></div>
                    <div class="relative text-white font-medium text-sm">
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/vector1.svg"
              width={600}
              height={600}
              alt="Picture of skill vector"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
