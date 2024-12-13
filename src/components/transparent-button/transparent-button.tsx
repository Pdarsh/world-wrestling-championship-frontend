import React from "react";
import styles from "./transparent-button.module.scss";
import { useRouter } from "next/router";

interface TransparentButtonProps {
  buttonText: string;
  location?: string;
}
const TransparentButton: React.FC<TransparentButtonProps> = ({
  buttonText,
  location="about"
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${location}`);
  };
  return (
    <button className={styles.transparentButton} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default TransparentButton;
