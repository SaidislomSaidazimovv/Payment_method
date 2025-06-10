import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90 ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
