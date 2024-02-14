import React from "react";

import avatar1 from "../../assets/images/testimonials/Avatar-1.png";
import avatar2 from "../../assets/images/testimonials/Avatar-2.png";
import avatar3 from "../../assets/images/testimonials/Avatar-3.png";
import avatar4 from "../../assets/images/testimonials/Avatar-4.png";
import BtnBlue from "../UI/BtnBlue";
import SectionTitle from "../UI/SectionTitle";
import SectionParagraph from "../UI/SectionParagraph";



const allTestimonial = [
  {
    img: avatar2,
    name: "App Development",
    testimonial:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
  },

  {
    img: avatar1,
    name: "Web Designing",
    testimonial:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
  },

  {
    img: avatar3,
    name: "Graphic Designing",
    testimonial:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
  },

  {
    img: avatar4,
    name: "Digital Marketing",
    testimonial:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
  },
];

const Testimonials = () => {
  const getDelayByIndex = (index: number) => (index * 200).toString();

  return (
    <section className="section-page flex flex-col items-center text-center bg-[#fbfdfe]" >
      <SectionTitle>Explore Our Services</SectionTitle>

      <SectionParagraph addStyles="max-w-[816px]">
      We are self-service data analytics software that lets you create visually.
      </SectionParagraph>

      {/* testimonials */}
      <div
        className="mt-14 mb-11 grid grid-cols-1
        tablet:grid-cols-2 tablet:items-stretch
        laptop:grid-cols-4"
      >
        {/* testimonial card */}
        {allTestimonial.map(({ img, name, testimonial }, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-delay={getDelayByIndex(index)}
            className="max-w-sm p-6 bg-[#fbfdfe] 
            rounded-3xl flex flex-col items-center"
          >
            <img src={img} alt="" className="rounded-full w-12 h-12" />

            <p className="my-4 flex flex-col">
              <span className="font-semibold text-black-off capitalize">
                {name}
              </span>
            </p>

            <p>&ldquo;{testimonial}&rdquo;</p>
          </div>
        ))}
      </div>

      {/* wrapper of buttons to switch */}
      

      {/* btn "see more", for mobile screens */}
      <BtnBlue>Get started</BtnBlue>
    </section>
  );
};

export default Testimonials;
