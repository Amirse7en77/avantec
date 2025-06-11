import React, { useState } from "react";
import { FaShieldAlt, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, handlePhoneCall } from '../constants/navItems';
import { FaPhoneVolume } from "react-icons/fa6";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-[#0e1030]/95 backdrop-blur border-b border-[#f6905c4d] shadow"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center p-4">
        <div>
          <nav>
            <ul className="nav-menu hidden md:flex  text-white  ">
              <li className="text-[#f6905c]  flex items-center justify-around gap-2 ">
                <FaShieldAlt className="text-xl" />
              </li>
              {navItems.map(({ label, target }, i) => (
                <li key={i}>
                  <Link
                    to={target}
                    smooth
                    duration={500}
                    spy={true}
                    activeClass="text-[#f6905c] "
                    className="px-4 py-2 rounded-xl cursor-pointer transition md:text-md lg:text-xl"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleMenu}
              className="block md:hidden text-white text-xl p-2 rounded hover:bg-[#f6905c1a]"
            >
              <FaBars />
            </button>
          </nav>
        </div>
        <button onClick={handlePhoneCall} >
        <div className="flex justify-center items-center border-2 border-amber-600 p-3 rounded-2xl ml-4">
         
           
        
          <p className="text-white">09140791428</p>
           <p className="text-white mr-2">
            <FaPhoneVolume className="text-lg"/>
          </p>
        </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-4 bg-[#0e1030] p-4 text-white shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(({ label, target }, i) => (
              <li key={i}>
                <Link
                  to={target}
                  smooth
                  duration={500}
                  onClick={handleNavClick}
                  className="block px-4 py-2 hover:text-[#f6905c] border-b-2 border-[#f6905c]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
