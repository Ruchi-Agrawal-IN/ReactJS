
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
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
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const[isLoading, setLoading] =  useState<boolean>(false);
    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games", {signal: abortController.signal})
        .then((res) => {
          setGames(res.data.results);
          isLoading(false);
        })
        .catch((err) => {
           if(err instanceof CanceledError){
            setError(abortController.signal.reason)
           }else{
            setError(err.message)
           }
           isLoading(false);
        });
        return ()=> abortController.abort();
    }, []);
    return{games, error, isLoading};
}

export default useGames;
