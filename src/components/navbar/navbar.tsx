import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../logo/logo";

const Navbar: React.FC = () => {
  const navItems = [
    "Home",
    "Shows",
    "Wrestling Matches",
    "Wrestlers",
    "About Us",
    "Contact Us",
  ];
  return (
    <div className={styles.navbar}>
      <Logo />
      <ul className={styles.navList}>
        {navItems.map((navItem) => (
          <li className={styles.navItems} key={`${navItem}`}>
            {navItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
