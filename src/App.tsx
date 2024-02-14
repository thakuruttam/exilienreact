import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


import Header from "./components/Header";
import GreatCustomer from "./components/Sections/GreatCustomer";
import Hero from "./components/Sections/Hero";
import Testimonials from "./components/Sections/Testimonials";
import TheBiggestBusiness from "./components/Sections/TheBiggestBusiness";
import TrustedCompanies from "./components/Sections/TrustedCompanies";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 200 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-20">
        <Hero />
        <div className="flex flex-col gap-y-32">
          <TrustedCompanies />
          <Testimonials />

          <GreatCustomer />
          <TheBiggestBusiness />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
