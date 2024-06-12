import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"

function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 aboutMain min-h-[110dvh] flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-end gap-10 px-4 md:px-6 lg:px-16">
        <div className="space-y-8 text-right max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-6xl lg:text-8xl text-[#FF6B6B] leading-tight">
            Handmade Cakes for All Occasions
          </h2>
          <p className="max-w-full text-[#FF6B6B] md:text-lg lg:text-2xl xl:text-4xl leading-relaxed text-start">
            At <span className="font-bold text-[#FF6B6B]">Cakery</span>, we are passionate about creating handmade cakes that are not only visually stunning but also bursting with flavor.
          </p>
       
          <div className="flex justify-end ">
            <Link
              to="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF6B6B] px-10 text-lg font-semibold text-white shadow-lg transition-transform transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Need a Cake?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
