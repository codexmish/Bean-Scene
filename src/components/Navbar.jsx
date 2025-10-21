import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const menuitem = [
    {
      menuName: "Home",
      navLink: "/",
    },
    {
      menuName: "Menu",
      navLink: "/",
    },
    {
      menuName: "About Us",
      navLink: "/",
    },
    {
      menuName: "contact Us",
      navLink: "/",
    },
  ];

  return (
    <>
      <nav className="py-5 bg-gray-500">
        <div className="main container flex items-center justify-between">
          {/* --------logo------- */}
          <div className="logo">
            <h1 className="text-4xl text-white font-normal font-clicker">
              Bean Scene
            </h1>
          </div>

          {/* -------menu---------- */}
          <div className="flex items-center gap-15">

            {
            menuitem.map((item, id)=>(
              <a
                className="text-sm text-white font-medium font-playfair"
                key={id}
                to={item.navLink}
              >
                {item.menuName}
              </a>
            ))
            }

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
