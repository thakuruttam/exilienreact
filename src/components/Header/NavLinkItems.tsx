import React from "react";

const listLinkItems = [
  { text: "About", link: "/", isDropdown: false },
  { text: "Services", link: "/", isDropdown: true },
  { text: "Project", link: "/", isDropdown: true },

];



const NavLinkItems = () => {
  return (
    <>
      {listLinkItems.map(({ text,  isDropdown }) =>
        isDropdown ? (
          <li key={text}>
           
              {text}

          
          </li>
        ) : (
          <li key={text}>
         
              {text}
           
          </li>
        )
      )}
    </>
  );
};

export default NavLinkItems;
