import React from "react";


const RightContentItems = () => {
  return (
    <>
    

      <button
        className="text-white bg-violet-blue flex items-center 
        gap-x-[6px] p-3 rounded-lg hover:bg-black duration-300"
      >
        <span>Get in Touch</span>

        {/* icon right arrow */}
        <svg className="w-5 h-6 fill-white translate-y-[10%]">
          <path d="M12.95 9.408 8.233 4.7A.833.833 0 1 0 7.05 5.875l4.125 4.167-4.125 4.125a.833.833 0 0 0 .27 1.36.834.834 0 0 0 .913-.184l4.717-4.71a.833.833 0 0 0 0-1.225Z" />
        </svg>
      </button>
    </>
  );
};

export default RightContentItems;
