import React, { useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { navigation } from "../../utlis/tools";
import MenuMobile from "../Header/MenuMobile";
import Logo from "../Logo/Logo";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Modal from "../Modal/Modal";

const NavBar = ({ postsResponse }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-6 h-6 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-6 h-6 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="md:flex md:items-center b ">
      <div className="flex flex-row items-center justify-between h-24 md:w-full p-2">
        <a href="/">
          <Logo />
        </a>
        <div className=" hidden md:flex w-[40%] ">
          <ul className="flex  w-full justify-between items-end">
            {navigation.map((nav, i) => (
              <li key={i}>
                <a
                  href={nav.href}
                  className="uppercase text-sm md:text-lg md:font-Montserrat md:font-extrabold cursor-pointer transition duration-300 ease-in hover:text-green-700"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center  md:justify-end w-[30%] md:w-[10%] ">
          {renderThemeChanger()}
          <SearchIcon
            className="w-6 h-6  md:flex md:ml-5 cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          />
          <MenuIcon
            className="w-8 h-8 md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        postsResponse={postsResponse}
      />
      <MenuMobile open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;
