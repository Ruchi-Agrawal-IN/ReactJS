

import { GameQuery } from "../App";
import useData from "./useData";
export interface Platform{
id: number;
name: string;
slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms:{platform:Platform}[];
    metacritic: number;
    rating_top: number;
  }
  
const useGames = (gameQury: GameQuery) => 
useData<Game>('/games', 
{params: {
  ordering: gameQury.sortOrder,
  genre: gameQury.genre?.id, 
  platforms:gameQury.platform?.id,
  search: gameQury.searchText
}},
[gameQury]);

export default useGames;
