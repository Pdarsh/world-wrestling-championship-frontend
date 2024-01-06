import React from "react";
import styles from "./transparent-button.module.scss";
import { useRouter } from "next/router";

interface TransparentButtonProps {
  buttonText: string;
}
const TransparentButton: React.FC<TransparentButtonProps> = ({
  buttonText,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };
  return (
    <button className={styles.transparentButton} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default TransparentButton;
