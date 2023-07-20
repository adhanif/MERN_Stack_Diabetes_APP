import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import TypeOneLogo from "../images/TypeOne_white_noBG.png";
import TypeOneLogoInline from "../images/TypeOne_white_noBG_inline.png";
import TypeOneLogoSlogan from "../images/TypeOne_white_noIcon.png";
import HappyKids2 from "../images/happy-kids2.png";

export default function Simple() {
  return (
    <div>
      <section id="hero">
        {/* Flex Container */}
        <div className="dark:bg-slate-400 container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* Left item */}
          <div className="flex flex-col mb-32  space-y-8 md:w-1/2">
            <p className="dark:text-white max-w-md text-lg text-center md:text-xl md:text-left">
              Welcome to your personal first aid guide to manage your diabetes
              better with
            </p>
            <img src={TypeOneLogoSlogan} alt="" className="m-0" />
            <div className="flex flex-col justify-center md:justify-start">
              <NavLink
                to="login"
                className={
                  "hidden p-3 px-6 pt-2 text-white bg-red-600 rounded-full baseline hover:bg-red-300 md:block"
                }
              >
                Get started
              </NavLink>
              <NavLink
                to="login"
                className={
                  "hidden p-3 px-6 pt-2 text-white bg-red-600 rounded-full baseline hover:bg-red-300 md:block"
                }
              >
                To the Events
              </NavLink>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-2/3">
            <img src={HappyKids2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
