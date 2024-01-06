import React from "react";
import Error from "next/error";
import Layout from "@/components/layout/layout";
import Card from "@/components/card/card";
import styles from "../styles/wrestler.module.scss";
import { Wrestler } from "@/shared/shared-types";
import { fetchWrestlers } from "@/redux/actions";
import axios from "axios";

interface WrestlersProps {
  wrestlers: Wrestler[]
  error?: {
    message:string;
    status:number;
};
  
}

const Wrestlers: React.FC<WrestlersProps> = ({wrestlers, error}) => {

  if (error) {
    return <Error title={error.message} statusCode={error.status} />;
  }


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


export const getServerSideProps = async () => {
  try{
      const apiUrl = "http://localhost:3001/wrestlers";
      const response = await axios.get(apiUrl);
      const wrestlers = response.data.data;
      return { props: { wrestlers } }

  } catch (error:any) {
      const {
          response: { status = "", statusText = "", data = {} } = {}
        } = error;
    
        const message = data?.message
          ? `${statusText}. ${data?.message}`
          : statusText || error.message;
    
        return {
          props: { error: { message, status } }
        };

  }

}

export default Wrestlers;
