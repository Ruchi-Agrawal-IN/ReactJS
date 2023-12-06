import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>{
  count: number;
  results: T[];
}
 const useData  = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) =>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const[isLoading, setLoading] =  useState<boolean>(false);
    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {signal: abortController.signal, ...requestConfig})
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
           if(err instanceof CanceledError){
            setError(abortController.signal.reason)
           }else{
            setError(err.message)
           }
           setLoading(false);
        });
        return () => abortController.abort();
    }, deps ? [...deps]: []);

    return{data, error, isLoading};
    
}
export default useData;