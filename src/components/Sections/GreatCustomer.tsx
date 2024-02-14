import React from "react";

import smillingMan from "../../assets/images/great-customer/smiling-man.png";
import SectionParagraph from "../UI/SectionParagraph";

const GreatCustomer = () => {
  return (
    <section
      className="section-page flex gap-20
      justify-center mobileL:justify-betwee "
    >
<div
        data-aos="zoom-out"
        data-aos-duration="600"
        data-aos-easing="ease-out"
        className="max-w-lg"
      >
        <img
          className="hidden mobileL:block h-auto  
          mobileL:w-[480px] laptop:w-full duration-500"
          src={smillingMan}
         
        />
      </div>
      <div
        className="flex flex-col items-center text-center 
        mobileL:flex-grow mobileL:items-start mobileL:text-left"
      >

        <SectionParagraph addStyles="max-w-[430px] mt-4 mb-8  tablet:mb-20 ml-10" >
        “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”
        </SectionParagraph>

        <SectionParagraph addStyles="max-w-[430px] mt-4 mb-8 tablet:mb-20 ml-10">
        David Calathan - Director of Design Operations, New York        </SectionParagraph>
      </div>

     
    </section>
  );
};

export default GreatCustomer;
