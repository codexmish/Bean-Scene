import React from "react";
import cup from '../assets/images/cup.png'
import bgImg from '../assets/images/chance-bg.png'
import cofeebean from '../assets/images/coffee_bean.png'

const Chance = () => {
  return (
    <>
      <section
        className="main w-full h-[574px] bg-cover bg-top flex items-center relative px-6 lg:px-o"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex flex-wrap items-center justify-center lg:justify-between container z-10">
            <div className="left"> 
                <h2 className="w-[290px] lg:w-[575px] text-3xl lg:text-[54px] text-white font-bold font-playfair">Get a chance to have an Amazing morning</h2>
                <p className="w-[250px] lg:w-[409px] py-6 text-sm lg:text-xl text-white font-normal font-playfair">We are giving you are one time opportunity to experience a better life with coffee.</p>
                <div className="sin-button w-[100px] lg:w-[134px] h-[38px] lg:h-[48px] flex items-center justify-center bg-theme text-xs lg:text-sm text-text-black font-medium font-playfair rounded-full">
              Order Now
            </div>
            </div>
            <div className="w-[200px] lg:w-[300px]">
                <div className="img ">
                    <img src={cup} alt="" />
                </div>
            </div>
        </div>
        <div className="absolute right-0 bottom-0">
                  <img src={cofeebean} alt="" />
                </div>
      </section>
    </>
  );
};

export default Chance;
