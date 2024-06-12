import React from 'react';
import { Link } from 'react-router-dom';
import Cake from '../../assets/SliderCakes/trans.png';
import "./HeroSection.css"

function HeroSection() {
  return (
    <section className="w-full pt-16 md:pt-24 lg:pt-40 bg-[#1b1b1b] min-h-[110dvh] hero ">
      <div className="container mx-auto px-6 space-y-10 xl:space-y-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-10 z-[10] capitalize">
            <h1 className=" text-[30px] font-extrabold tracking-tighter sm:text-4xl md:text-5xl xl:text-[6.4rem] 2xl:text-[6.75rem] text-[#FF6B6B]">
              München<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e6e6e6] to-[#f89595]"> No.1</span> Handmade Cakes for all occasions
            </h1>
            <p className="text-lg md:text-xl text-[#FF6B6B] max-w-2xl">
              Discover the perfect balance of artistry and flavor in our handcrafted cakes, made with the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="inline-flex items-center justify-center h-12 px-6 py-3 text-base font-semibold text-white transition bg-[#FF6B6B] rounded-md shadow-md hover:bg-[#ff5e5e] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2"
              >
                Order Now
              </Link>
              <Link
                to="#"
                className="inline-flex items-center justify-center h-12 px-6 py-3 text-base font-semibold text-[#FF6B6B] transition bg-white border-2 border-[#FF6B6B] rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="w-full cakeImage">
              <img
                src={Cake}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
