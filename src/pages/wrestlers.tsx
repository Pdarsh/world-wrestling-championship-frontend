import React from "react";
import Layout from "@/components/layout/layout";
import Card from "@/components/card/card";
import styles from "../styles/wrestler.module.scss";
import { Wrestler } from "@/shared/shared-types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Wrestlers = () => {
  const wrestlers: Wrestler[] = useSelector(
    (state: RootState) => state.wrestlers.wrestlers
  );

  return (
    <Layout>
      <div>
        <h1>Wrestlers List</h1>
        <div className={styles.wrestlers}>
          {wrestlers.map((wrestler) => (
            <Card
              key={wrestler.id}
              name={wrestler.name}
              rank={wrestler.rank}
              height={wrestler.height}
              matches={wrestler.matches}
              weight={wrestler.weight}
              matches_won={wrestler.matches_won}
              image_url={wrestler.image_url}
              finisher={"F5"}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wrestlers;
