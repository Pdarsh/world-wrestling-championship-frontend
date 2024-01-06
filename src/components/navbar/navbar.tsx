import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../logo/logo";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "@/utils/constants";

const Navbar: React.FC = () => {
  const router = useRouter();
  const handleRoute = (id:string) => {
    if(id === "home"){
      router.push("/");
    } else {
      router.push(`/${id}`);
    }
  }

  return (
    <div className={styles.navbar}>
      <Logo />
      <ul className={styles.navList}>
        {NAV_ITEMS.map(({id, label}) => (
          <li className={styles.navItems} key={`${id}`}>
            <button onClick={() => handleRoute(id)}>
            {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
