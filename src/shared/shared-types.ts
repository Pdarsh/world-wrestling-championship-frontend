export type Wrestler = {
    id: string;
    name: string;
    rank: string;
    height: string;
    matches: string;
    weight: string;
    matches_won: string;
    image_url: string;
  };

export type TMatch = {
  id: number;
  match_date: string;
  match_type: string;
  show_name: string;
  winner_id:number[];
  wrestlers_involved:string[];
}