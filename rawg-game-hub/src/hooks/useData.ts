import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T>{
  count: number;
  results: T[];
}
 const useData  = <T>(endPoint: string) =>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    //const[isLoading, setLoading] =  useState<boolean>(false);
    useEffect(() => {
        const abortController = new AbortController();
        // setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {signal: abortController.signal})
        .then((res) => {
          setData(res.data.results);
        //   isLoading(false);
        })
        .catch((err) => {
           if(err instanceof CanceledError){
            setError(abortController.signal.reason)
           }else{
            setError(err.message)
           }
        //    isLoading(false);
        });
        return ()=> abortController.abort();
    }, []);
    return{data, error};

    //return{data, error, isLoading};
    
}
export default useData;