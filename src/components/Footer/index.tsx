import React from "react";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="section-page mt-24 mb-10">
      <div
        className="flex flex-col text-center gap-x-8 gap-y-12
        mobileL:grid mobileL:grid-cols-2 mobileL:justify-items-center
        tablet:flex tablet:flex-row tablet:justify-between tablet:text-left bg-black px-9 py-9"
      >
        <div
          className="flex flex-col items-center text-center
          tablet:items-stretch tablet:text-left text-white"
        >
          <Link
            to="/"
            className="pr-3 hover:opacity-60 active:scale-[.98] duration-300"
          >
           Digital agency
          </Link>

          <p className="mt-6 mb-10 tablet:max-w-[286px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>

        </div>

        <ul className="flex flex-col gap-y-3 tablet:gap-y-5 whitespace-nowrap">
          <li className="text-xl font-semibold text-white mb-1">Company</li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Features          
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Works          
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Careers
            </Link>
          </li>
        
        </ul>

        <ul className="flex flex-col gap-y-3 tablet:gap-y-5 whitespace-nowrap text-white">
          <li className="text-xl font-semibold text-white mb-1">Help</li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Customer Support
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Delivery Details
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-y-3 tablet:gap-y-5 whitespace-nowrap">
          <li className="text-xl font-semibold text-white mb-1">Resources</li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
              Free eBooksl
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium hover:text-violet-blue duration-200 text-white"
            >
How to - Blog            </Link>
          </li>
        
        </ul>
      </div>

    
    </footer>
  );
};

export default Footer;
