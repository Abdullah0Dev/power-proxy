import { useState } from "react";
import { navigation } from "../constants";
import CustomButton from "../components/CustomButton";
import { exit, menu } from "../assets";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul ">
    {navigation.map((item) => (
      <li
        onClick={() => {
          window.location.href = item.href; // Make the whole li clickable
          onClick();
        }}
        key={item.id}
        className="nav-li"
      >
        <a href={item.href} className="nav-li_a">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className=" pt-9">
      <div
        className="w-11/12 mx-auto max- :hidden max-lg:w-full  bg-white
       rounded-3xl bg-opacity-50 "
      >
        <div
          className={`flex justify-between   items-center py-3 mx-auto c-space`}
        >
          <a
            href="/"
            className="text-white flex items-center font-bold text-xl hover:text-white transition-colors"
          >
            <img
              src={"/logo.png"}
              className={`object-contain w-12 h-12 logo-transition  `}
              alt="logo"
            />
            <h1 className="text-lg max-md:hidden text-BLUE-600 ">PowerProxy</h1>
          </a>

          <nav className=" max-sm:hidden ">
            <NavItems />
          </nav>
          <div className="menu">
            
          </div>
          <div className=" flex  max-lg:hidden items-center gap-x-9">
            <div className="">
              <CustomButton
                className="w-full  "
                disabled={false}
                white={true}
                href="#signup"
              >
                New Account
              </CustomButton>
            </div>
            <div className="max-xl:hidden">
              <CustomButton
                className="w-full"
                disabled={false}
                white={false}
                gradientHover=" hover:text-COOL-600"
              >
                Sign In
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
