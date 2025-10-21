import React from "react";
import bgImg from "../assets/images/banner-bg.png";
import overlay from "../assets/images/overlay.png";

const Banner = () => {
  return (
    <>
      <div
        className="main w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* overlay */}

        <div
          className="absolute z-0 bg-center bg-cover inset-0"
          style={{ backgroundImage: `url(${overlay})` }}
        ></div>

        <div className="container relative z-10">
          <div className="pt-[183px] pb-[95px] flex flex-col justify-center gap-5">
            <h2 className="text-[22px] text-white font-playfair font-medium">
              We've got your morning covered with
            </h2>
            <h1 className="text-[220px] text-white font-normal font-clicker">
              Coffee
            </h1>
            <p className="text-xl text-white font-normal font-playfair w-[527px]">
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>

            <div className="sin-button w-[134px] h-[48px] flex items-center justify-center bg-theme text-sm text-text-black font-medium font-playfair rounded-full">
              Order Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
