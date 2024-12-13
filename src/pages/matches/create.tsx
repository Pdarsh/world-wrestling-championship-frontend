import React from "react";
import VerticalCarousel from "@/components/vertical-carousel/vertical-carousel";
import { Wrestler } from "@/shared/shared-types";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import Layout from "@/components/layout/layout";
import styles from "../../styles/match.module.scss";

const Match = () => {
  const wrestlers: Wrestler[] = useSelector(
    (state: AppState) => state.wrestlers.wrestlers
  );
  return (
    <Layout>
      <div className={styles.match}>
          <VerticalCarousel items={wrestlers} />
          <VerticalCarousel items={wrestlers} />
      </div>
    </Layout>
  );
};

export default Match;
