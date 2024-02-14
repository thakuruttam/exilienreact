import React from "react";


import dribbble from "../../assets/images/brands/dribbble.png";
import google from "../../assets/images/brands/google.png";
import microsoft from "../../assets/images/brands/microsoft.png";
import paypal from "../../assets/images/brands/paypal.png";
import uber from "../../assets/images/brands/uber.png";
import SectionParagraph from "../UI/SectionParagraph";

const TrustedCompanies = () => {
  return (
    <section
      className="section-page flex flex-col items-center gap-y-12
      text-center"
    >
     

      <SectionParagraph addStyles="max-w-[816px]">
      Powering next-gen companies
      </SectionParagraph>

      <div
       
        className="flex flex-col mobileM:flex-row justify-center
        items-center gap-x-16 gap-y-7 flex-wrap
        [&>img]:w-24"
      >
        <img src={uber} alt="uber" />
        <img src={google} alt="google" />
        <img src={paypal} alt="paypal" />
        <img src={microsoft} alt="microsoft" />
        <img src={dribbble} alt="dribbble" />
      </div>
    </section>
  );
};

export default TrustedCompanies;
