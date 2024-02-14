import React from "react";

import WomanInWhiteSuit from "../../assets/images/hero/woman-in-white-suit.png";

const Hero = () => {
  return (
    <section
      className="pt-3 laptop:h-[calc(100vh-84px)]
      iPadPro:h-auto"
    >
=      <div
        className="section-page h-full flex items-center
        pt-6 pb-7 tabletM:pt-0 tabletM:pb-0"
      >
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-out"
          className="w-full text-center tabletM:w-auto
          tabletM:text-left flex flex-col gap-y-8 items-center 
          tabletM:items-stretch"
        >
          <h1
            className="text-black font-bold
            text-4xl mobileM:text-5xl laptop:text-6xl desktop:text-6xl duration-200"
          >
            Building Brands 
            </h1>
           <h1  className="text-black font-bold
            text-4xl mobileM:text-5xl laptop:text-6xl desktop:text-6xl duration-200	"> in the <span className="text-violet-900">Digital Age </span>
          </h1>
          <p className="max-w-lg text-black">
          Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
          </p>

          <div
            className="flex flex-col mobileM:flex-row mobileM:items-center
            gap-x-1 gap-y-3"
          >
          

            <button style={{ marginRight:"100%"}}
              className="min-w-[118px] bg-violet-blue text-[#fcfaff]
              font-medium px-5 py-4 rounded-2xl hover:shadow-[0_0_0_2px_#fff]
              hover:bg-violet-blue-dark duration-300 whitespace-nowrap 
              leading-5"
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-out"
          className="w-full tabletM:w-auto hidden tabletM:block
          h-full ma-w-[516x] max-w-[600px]"
        >
          <img
          style={{ marginLeft:"25%"}}
            src={WomanInWhiteSuit}
            className="w-[360px] laptop:w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
