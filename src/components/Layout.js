import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const darkToggle = () => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };

  return (
    <div>
      <header className=" p-5 ">
        <nav className="flex justify-end h-9 items-center">
          <NavLink to="/" className={"nav-item"}>
            Home
          </NavLink>
          <NavLink to="/cars" className={"nav-item "}>
            Cars
          </NavLink>
          <NavLink to="game/counter" className={"nav-item"}>
            Counter
          </NavLink>
          <NavLink to="game/color" className={"nav-item"}>
            Color
          </NavLink>
          <button
            onClick={darkToggle}
            className="text-white text-3xl translate  hover:scale-125 transition ease-out duration-300 hover:opacity-30 "
          >
            <i className="las la-sun"></i>
          </button>
        </nav>
      </header>
      <div className="container mx-auto py-4 px-4">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
