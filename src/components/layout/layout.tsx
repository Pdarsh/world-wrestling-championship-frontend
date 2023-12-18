import React, { ReactNode } from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.column}></div>
      <div className={`${styles.column} ${styles.middleColumn}`}>
        {children}
      </div>
      <div className={styles.column}></div>
    </div>
  );
};

export default Layout;
