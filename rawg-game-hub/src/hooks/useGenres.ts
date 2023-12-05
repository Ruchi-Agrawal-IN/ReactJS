import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre{
    id: number;
    name: string;
}
interface FetchGenresResponse{
  count: number;
  results: Genre[];
}
 const useGenres = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const[isLoading, setLoading] =  useState<boolean>(false);
    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", {signal: abortController.signal})
        .then((res) => {
          setGenres(res.data.results);
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
    return{genres, error, isLoading};
    
}
export default useGenres;