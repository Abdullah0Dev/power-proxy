import { useState } from "react";
import { navigation } from "../constants";
import CustomButton from "../components/CustomButton";
import { exit, menu } from "../assets";
import { motion } from "framer-motion"; // Import framer-motion

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" pt-12 md:px-9 max-sm:justify-center   max-sm:flex">
      <div
        className="w-11/12 mx-auto max-sm:hidden max-lg:w-full  bg-white
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
      <div className="mobile justify-between items-center rounded-2xl px-3 py-3 w-[80%] self-center z-50 bg-black/10 absolute hidden max-sm:flex">
        <a
          href="/"
          className="text-white flex items-center font-bold text-xl hover:text-white transition-colors"
        >
          <img
            src={"/logo.png"}
            className={`object-contain w-12 h-12 logo-transition  `}
            alt="logo"
          />
        </a>
        <motion.button
          onClick={toggleMenu}
          className="menu hidden max-sm:flex"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={isOpen ? exit : menu}
            className="w-8 h-8 object-contain"
            alt="menu bar"
          />
        </motion.button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "100vh" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`absolute hidden inset-0 bg-transparent backdrop-blur-md z-20 max-sm:flex items-center justify-center ${
          isOpen ? "max-sm:flex flex-col" : "hidden"
        }`}
      >
        <NavItems />
        <div className="  w-full absolute px-9 bottom-5">
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
          </div>
      </motion.div>
      
    </header>
  );
};

export default Navbar;
