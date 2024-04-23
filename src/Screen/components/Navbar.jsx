import React from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  const options = [
    {
      name: "Home",
      path: "/",
    },
    { name: "Flashcard", path: "/flashcard" },
    { name: "Contact", path: "/" },
    { name: "FAQ", path: "/" },
  ];
  return (
    <div className="flex flex-row flex-1 items-center  container mx-auto">
      <img src={Logo} className="h-7 "></img>
      <div className="flex flex-1 justify-end items-center flex-row gap-10">
        {options.map((item, index) => {
          return (
            <NavLink key={index} className="text-[#3A3740]" to={item.path}>
              {item.name}
            </NavLink>
          );
        })}
        <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] px-10 py-3 rounded-3xl">
          <p className="text-white font-semibold">Login</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
