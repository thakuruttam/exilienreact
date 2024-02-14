import React from "react";

import avatar1 from "../../assets/images/big/Avatar-1.png";
import avatar2 from "../../assets/images/big/Avatar-2.png";
import avatar3 from "../../assets/images/big/Avatar-3.png";
import BtnBlue from "../UI/BtnBlue";
import SectionTitle from "../UI/SectionTitle";



const allTestimonial = [
  {
    img: avatar1,
    name: "App Development",
    testimonial:
      "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
  },

  {
    img: avatar2,
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


];

const TheBiggestBusiness = () => {
  const getDelayByIndex = (index: number) => (index * 200).toString();

  return (
    <section className="section-page flex flex-col items-center text-left">
      <SectionTitle>Our Blogs</SectionTitle>  

     

      <div
        className="mt-14 mb-11 grid grid-cols-1 items-start gap-x-6 gap-y-8
        tablet:grid-cols-2 tablet:items-stretch
        laptop:grid-cols-3"
      >
        {allTestimonial.map(({ img, name, testimonial }, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-delay={getDelayByIndex(index)}
            className="max-w-sm p-6 bg-[#fbfdfe] border border-[#e8f0f4]
            rounded-3xl flex flex-col items-center"
          >
            <img src={img} alt="" className="full w-72 h-72" />

            <p className="my-4 flex flex-col">
              <span className="font-semibold text-black-off capitalize">
                {name}
              </span>
            </p>

            <p>&ldquo;{testimonial}&rdquo;</p>
          </div>
        ))}
      </div>

      


      <BtnBlue>View All posts</BtnBlue>
    </section>
  );
};

export default TheBiggestBusiness;
