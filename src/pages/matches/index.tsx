import React from "react";
import axios from "axios";
import { TMatch } from "@/shared/shared-types";
import MatchDetail from "@/components/match-detail/match-detail";
import Error from "next/error";
import Layout from "@/components/layout/layout";

 
type TProps = {
    error?: {
        message:string;
        status:number;
    };
    matches: TMatch[];
  };
  
 
const Matches: React.FC<TProps> = ({ error, matches }) => {
    if (error) {
        return <Error title={error.message} statusCode={error.status} />;
      }

    return(
        <Layout>
            <MatchDetail matches={matches}/>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    try{
        const apiUrl = "http://localhost:3001/matches";
        const response = await axios.get(apiUrl);
        const matches = response.data.data;
        return { props: { matches } }

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

export default Matches;