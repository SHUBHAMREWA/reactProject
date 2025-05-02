import axios from "axios"
import { useState , useEffect } from "react" ;


export const useHttp  = (request) =>{
         
    const [httpResponse ,setHttpResponse]  = useState(null) ;
    const [httpError,  setHttpError]       =  useState(null)  ;
    const [httpLoader  , setHttpLoader]    = useState(true)   ;
    

    const ajax =()=>{
        axios(request)
        .then(response=>{
            setHttpResponse(response.data)
        })
        .catch(error =>{
             setHttpError(error.response)
        })
    }

    useEffect(()=>{
        if(request){
              ajax();
        }
    }, [JSON.stringify(request)])
    
    return [httpResponse , httpError , httpLoader ]  ;
}