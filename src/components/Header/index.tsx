import React from 'react';

import { Link } from "react-router-dom";

import NavLinkItems from "./NavLinkItems";
import RightContentItems from "./RightContentItems";

const Header = () => {

  return (
    <>
      {/* mobile menu version */}

      {/* Header itself */}
      <header className="pt-5 pb-4 mobileM:h-[84px]">
        {/* nav - for the desktop menu version */}
        <nav
          className="section-page flex items-center justify-between
          gap-x-8 text-black font-medium -tracking-[0.32px] leading-5
          whitespace-nowrap"
        >
          {/* wrapper of btn to show mobile menu and site logo */}
          <div className="flex items-center gap-x-3">
            {/* btn to show mobile menu */}
            <button  className="w-8 h-8 laptop:hidden">
              <svg
                className="w-7 h-7 fill-none stroke-[1.5] stroke-black  
                hover:stroke-violet-blue duration-300"
                viewBox="0 0 24 24"
              >
              </svg>
            </button>

            <Link
              to="/"
              className="pr-3 hover:opacity-60 active:scale-[.98] duration-300"
            >
             Digital agency
            </Link>
          </div>

          <menu className="hidden laptop:flex items-center gap-x-6 text-grey" style={{marginLeft:"52%"}}>
            <NavLinkItems />
          </menu>

          <div className="hidden mobileM:flex items-center gap-x-4">
            <RightContentItems />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
