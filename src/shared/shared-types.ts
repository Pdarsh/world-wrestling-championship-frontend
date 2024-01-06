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
  matchDate: string;
  matchType: string;
  showName: string;
  winnerId:number[];
  wrestlersInvolved:string[];
}