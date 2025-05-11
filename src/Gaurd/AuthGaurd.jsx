import { Outlet  , Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAsync }from "react-async"  ;
import axios from "axios"  ;  
import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:3030"


const verifyToken = async({token ,set})=>{

               try {
                 let response = await axios({
                               method : "get" ,
                               url    : `/verify-token/`+token
                      })
                   let userData =    JSON.stringify(response.data.data.data) ;
                   sessionStorage.setItem("user", userData)
                   set(response.data.data.data)
                    return   response ;
                
               }
               catch(error){
                    throw new Error(error) ; 
               }
}


const AuthGaurd = ()=>{
         const navigate = useNavigate()
        const cookie =  new Cookies() ;
        const Token   =   cookie.get("authToken") ;
        const [response , setResponse]   =  useState(null)
        const {data , error , isLoading}  = useAsync({
                                                  promiseFn : verifyToken , 
                                                    token   :   Token  ,
                                                    set : setResponse
                                                   })
       

       
       if(response && response){
          return <Outlet/>
      }
      else if(!Token){
           navigate("/login")
      }
      else if(!response){
             return  <h1>Loading...</h1>
      }
  

}

export default AuthGaurd ; 
