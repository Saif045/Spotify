import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiSearch,
} from "react-icons/hi";
import { logo } from "../assets";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "WorldWide", to: "/WorldWide", icon: HiOutlineHashtag },
  { name: "Search", to: "/search", icon: HiSearch },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
];

const NavLinks = () => (
  <div className="sm:mt-10 flex sm:block justify-center ">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-col sm:flex-row justify-start items-center mt-1 sm:mt-0  sm:my-8 text-sm font-medium text-gray-400 hover:text-green-500">
        <item.icon className="w-6 h-6 sm:mr-2" />
        <p className="text-xs text-center mx-1"> {item.name}</p>
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  return (
    <>
      <div className="  flex  absolute sm:top-0 bottom-0 sm:left-0  flex-col  w-screen sm:w-[200px] h-12 sm:h-screen z-[90] sm:py-10 sm:px-4 bg-[#000000] ">
        <div className=" hidden sm:flex absolute top-0 bottom-0 left-0  w-full h-screen -z-[100]  bg-gradient-to-l from-[#032001]"></div>
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-full h-14 object-contain hidden sm:flex" />{" "}
        </NavLink>
        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
