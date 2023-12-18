import React, { useState } from "react";
import Card from "../card/card";
import styles from "./vertical-carousel.module.scss";
import { Wrestler } from "@/shared/shared-types";

interface VerticalCarouselProps {
  items: Wrestler[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className={styles["vertical-carousel"]}>
      <div>
        <button onClick={prevSlide}>&uarr;</button>
      </div>
      <div>
        <Card
          key={items[currentIndex].id}
          name={items[currentIndex].name}
          rank={items[currentIndex].rank}
          height={items[currentIndex].height}
          matches={items[currentIndex].matches}
          weight={items[currentIndex].weight}
          matches_won={items[currentIndex].matches_won}
          image_url={items[currentIndex].image_url}
          finisher={"F5"}
        />
      </div>
      <div>
        <button onClick={nextSlide}>&darr;</button>
      </div>
    </div>
  );
};

export default VerticalCarousel;
