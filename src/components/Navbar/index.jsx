import React, { useState } from "react";
import { NavbarStyled } from "./NavbarStyled";
import { Link } from "react-router-dom";
import desktopLogo from "../../assets/icons/valorant-logo.svg";
import mobileLogo from "../../assets/icons/valorant-text-logo.svg";
import closeLogo from "../../assets/icons/close.svg";
import menuLogo from "../../assets/icons/menu.svg";
import { motion, AnimatePresence } from "framer-motion";
const variants = {
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      type: "tween",
    },
  },
};

const xvar = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavbarStyled>
      <div className="logo-container">
        <img
          className="desktop-logo"
          src={desktopLogo}
          alt="desktop-valorant-logo"
        />
        <img
          className="mobile-logo"
          src={mobileLogo}
          alt="mobile-valorant-logo"
        />
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="exit"
            className="mobile-nav-links"
          >
            <motion.div variants={xvar}>
              <Link to="/agents">Agents</Link>
            </motion.div>

            <motion.div variants={xvar}>
              <Link to="/#">Maps</Link>
            </motion.div>

            <motion.div variants={xvar}>
              <Link to="/#">Arsenal</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="desktop-nav-links">
        <div>
          <Link to="/agents">Agents</Link>
        </div>
        <div>
          <Link to="/maps">Maps</Link>
        </div>
        <div>
          <Link to="/arsenal">Arsenal</Link>
        </div>
      </div>
      <div className="menu-logo-container">
        {showMenu ? (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="close-logo"
            onClick={() => setShowMenu(false)}
          >
            <img src={closeLogo} alt={"close-logo"} />
          </motion.div>
        ) : (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="menu-logo"
            onClick={() => setShowMenu(true)}
          >
            <img src={menuLogo} alt="menu-logo" />
          </motion.div>
        )}
      </div>
    </NavbarStyled>
  );
}

export default Navbar;
