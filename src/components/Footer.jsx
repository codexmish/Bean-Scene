import React from "react";
import bgImg from "../assets/images/footer.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { Link } from "react-router";
import leftcup from '../assets/images/leftcup.png'
import rightcup from '../assets/images/rightcup.png'

const Footer = () => {
  return (
    <>
      <footer
        className="main w-full h-fit lg:h-[492px] bg-cover bg-bottom flex items-center relative py-10 lg:py-0 px-6 lg:px-o  bg-[#442808]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container flex flex-wrap items-center justify-center gap-10 lg:justify-between">
          <div className="div w-[380px]">
            <div className="logo">
              <h1 className="text-[54px] text-white font-normal font-clicker">
                Bean Scene
              </h1>
            </div>
            <p className="text-xs text-white font-normal font-playfair py-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="icons text-white flex items-center gap-5">
              <FaFacebook />
              <RiInstagramFill />
              <RiYoutubeFill />
              <FaTwitter />
            </div>
          </div>

          {/* -------about part--- */}
          <div className="about">
            <h1 className="text-sm lg:text-2xl text-white font-bold font-playfair mb-7 lg:mb-[55px]">
              About
            </h1>

            <div className="menu flex flex-col gap-5">
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                Menu
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                Features
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                News & Blogs
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                Help & Supports
              </Link>
            </div>
          </div>

          {/* -------Company part--- */}
          <div className="Company">
            <h1 className="text-sm lg:text-2xl text-white font-bold font-playfair mb-7 lg:mb-[55px]">
              Company
            </h1>

            <div className="menu flex flex-col gap-5">
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                How we work
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                Terms of service
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                Pricing
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                FAQ
              </Link>
            </div>
          </div>

          {/* -------Contact Us part--- */}
          <div className="Contact Us">
            <h1 className="text-sm lg:text-2xl text-white font-bold font-playfair mb-7 lg:mb-[55px]">
              Contact Us
            </h1>

            <div className="menu flex flex-col gap-5">
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair w-[250px] lg:w-[332px]">
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                +1 202-918-2132
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                beanscene@mail.com
              </Link>
              <Link className="text-xs lg:text-[18px] text-white font-normal font-playfair">
                www.beanscene.com
              </Link>
            </div>
          </div>
        </div>

        <div className="leftcup absolute w-30 lg:w-fit left-0 -top-[100px] lg:-top-[241px]">
            <img src={leftcup} alt="cup" />
        </div>

        <div className="rightcup absolute w-30 lg:w-fit right-0 -top-[100px] lg:-top-[241px]">
            <img src={rightcup} alt="cup" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
