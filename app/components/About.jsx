import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { LiaVectorSquareSolid } from "react-icons/lia";



const About = () => {
  return (
    <>
      <section class="text-gray-900 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <p className="leading-3 text-xl text-[#684DF4]"><LiaVectorSquareSolid className="text-white bg-[#684DF4] inline-flex text-2xl mr-1"/> ABOUT FPTECK IT SOLUTIONS</p>
              <h1 className="text-3xl font-bold py-10">Preparing For Your Business Provide Best <span className="text-[#684DF4] font-medium">IT Solution</span></h1>
              <p class="leading-relaxed">
              Quickly re-engineer intuitive e-services whereas compelling niches. Professionally syndicate strategic e-commerce without covalent leadership skills. Globally customize equity invested imperatives.
              </p>
              <div className="font-semibold space-y-3 py-10 text-sm">
                <p><FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1"/> Dramatically re-engineer value added IT systems via mission</p>
                <p><FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1"/> Website & Mobile application design & Development</p>
                <p><FaCheckSquare className="bg-white text-[#684DF4] inline-flex text-xl mr-1"/> Professional User Experince & Interface researching</p>
              </div>
              <div class="flex">
                <button class=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
