import React from "react";
import CommonHead from "./CommonHead";
import blast from "../assets/images/coffee_blast.png";

const Enjoy = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute left-0 top-[-200px]">
          <img src={blast} alt="" />
        </div>
        <div className="container">
          <CommonHead
            head={"Enjoy a new blend of coffee style"}
            pp={
              "Explore all flavours of coffee with us. There is always a new cup worth experiencing"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Enjoy;
