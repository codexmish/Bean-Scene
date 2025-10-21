import React from "react";
import CommonHead from "./common/CommonHead";
import blast from "../assets/images/coffee_blast.png";
import CommonProduct from "./common/CommonProduct";
import capachino from "../assets/images/capachino.png";

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

          <div className="products flex items-center justify-between mt-8g">
            <CommonProduct
              img={capachino}
              head={"Cappuccino"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />

            <CommonProduct
              img={capachino}
              head={"Cappuccino"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />

            <CommonProduct
              img={capachino}
              head={"Cappuccino"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />

            <CommonProduct
              img={capachino}
              head={"Cappuccino"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Enjoy;
