import React from "react";
import styles from "./match-detail.module.scss";
import { TMatch } from "@/shared/shared-types";
import { formatDate, formatWrestlerNames } from "@/utils/helpers";

interface MatchProps {
    matches: TMatch[]
}

const MatchDetail: React.FC<MatchProps> = ({ matches }) => {

    return(
        <>
        <h1>Matches</h1>
        {matches.map(({id, match_date, show_name, wrestlers_involved, winner_id, match_type}) => 
                (<div className={styles.gridContainer} key={id}>
                    <div className={styles.date}>{formatDate(match_date)}</div>
                    <div className={styles.showName}>{show_name}</div>
                    <div className={styles.wrestlersInvolved}>{formatWrestlerNames(wrestlers_involved)}</div>
                    <div className={styles.winnerId}>{winner_id}</div>
                    <div className={styles.matchType}>{match_type}</div>
                </div>))}
        </>
    )
}

export default MatchDetail
