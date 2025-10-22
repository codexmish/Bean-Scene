import React, { useState } from "react";
import logo from "../assets/images/cofeeFavvvv.png";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import { menuitem } from "./Navbar";
import { Link } from "react-router";

const ResNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="lg:hidden ">
        <div>
          <div className="main flex items-center justify-between px-6 py-6">
            <div className="logo w-6">
              <img src={logo} alt="logo" />
            </div>

            <div
              onClick={() => setShowMenu(true)}
              className="menu cursor-pointer text-cofee text-2xl"
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </div>

        {showMenu && (
          <div className="menu w-full h-screen bg-white absolute left-0 top-0 z-50">
            <div className="main flex items-center justify-between px-6 py-6">
              <div className="logo w-6">
                <img src={logo} alt="logo" />
              </div>

              <div
                onClick={() => setShowMenu(!showMenu)}
                className="menu cursor-pointer text-cofee text-2xl"
              >
                <GiTireIronCross />
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 mt-15">
              {menuitem.map((item, id) => (
                <Link
                  className="text-sm text-cofee hover:text-theme font-medium font-playfair"
                  key={id}
                  to={item.navLink}
                >
                  {item.menuName}
                </Link>
              ))}
            </div>

            {/* --------reg and login button---- */}
            <div className="buttons flex items-center justify-center gap-6 mt-10">
              <div className="sin-button cursor-pointer w-[100px] h-[45px] flex items-center justify-center  bg-theme hover:bg-cofee text-sm text-text-black hover:text-white font-medium font-playfair rounded-full">
                Sing In
              </div>
              <div className="sin-button cursor-pointer w-[100px] h-[45px] flex items-center justify-center bg-theme hover:bg-cofee text-sm text-text-black hover:text-white font-medium font-playfair rounded-full">
                Sing Up
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ResNav;
