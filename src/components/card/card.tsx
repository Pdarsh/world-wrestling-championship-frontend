import React from "react";
import Image from "next/image";
import styles from "./card.module.scss";

interface TransparentButtonProps {
  buttonText: string;
}
const Card: React.FC<any> = ({
  name,
  rank,
  height,
  matches,
  weight,
  matches_won,
  finisher,
  image_url,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h3>{name}</h3>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__body__image}>
          <Image src={image_url} alt={`Image`} width={200} height={200} />
        </div>
        <div className={styles.card__body__content}>
          <div className={styles.card__body__content__data}>Rank - {rank} </div>
          <div className={styles.card__body__content__data}>
            Height - {height}
          </div>
          <div className={styles.card__body__content__data}>
            Weight - {weight}
          </div>
          <div className={styles.card__body__content__data}>
            Matches - {matches}
          </div>
          <div className={styles.card__body__content__data}>
            Matches Won - {matches_won}
          </div>
          <div className={styles.card__body__content__data}>
            Finisher - {finisher}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
