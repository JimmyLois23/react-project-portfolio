import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./styles.scss"

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "EXPERIENCE",
    to: "/experience",
  },
  // {
  //   label: "PROJECTS",
  //   to: "/projects",
  // },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, settoggleIcon] = useState(false);
  const handleToggleIcon = () => {
    settoggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => {
            return (
              <li key={key} className="navbar__container__menu__item ">
                <Link
                  className="navbar__container__menu__item__links"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-icon_mobile" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
