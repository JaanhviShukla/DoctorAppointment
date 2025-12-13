import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to prescripto, a one way platform to book your appointments
            with indias top doctors, that are highly dignified. book your doctor
            with just a single click.
          </p>
          <p>
            Our platform provides assurance to your health, all things are done
            in a procedural way, we are welcome you all to the wide range of
            doctors available you can book anyone
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            our main vision is to provide medical care to any one with a ,all
            the doctors available at a single click.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY<span className="text-gray-700 font-semibold"> CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>Tailored recommendation and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  );
};

export default About;
