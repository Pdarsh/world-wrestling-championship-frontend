import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../logo/logo";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const navItems = [
    {id:"home", label:"Home"},
    {id:"shows", label:"Shows"},
    {id:"matches", label:"Wrestling Matches"},
    {id:"wrestlers", label:"Wrestlers"},
    {id:"about", label:"About Us"},
    {id:"contact", label:"Contact Us"},
  ];
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <Logo />
      <ul className={styles.navList}>
        {navItems.map(({id, label}) => (
          <li className={styles.navItems} key={`${id}`}>
            <button onClick={() => router.push(`/${id}`)}>
            {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
