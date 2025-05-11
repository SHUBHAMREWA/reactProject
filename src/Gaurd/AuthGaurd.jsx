import { Outlet  , Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAsync }from "react-async"  ;
import axios from "axios"  ;  

axios.defaults.baseURL = "http://localhost:3030"


const verifyToken = async({token})=>{

               try {
                 let response = await axios({
                               method : "get" ,
                               url    : `/verify-token/`+token
                      })
                    console.log(response.data.data.data)
                   return   response ;
               }
               catch(error){
                    throw new Error(error) ; 
               }
}


const AuthGaurd = ()=>{
        const cookie =  new Cookies() ;
        const Token   =   cookie.get("authToken") ;
        
        const {data , error , isLoading}  = useAsync({
                                                  promiseFn : verifyToken , 
                                                    token   :   Token 
                                                                })
       
      console.log(data)
       
      // if(isLoading){
      //    return <Outlet/>
      // }
      // else if(!isLoading){
      //        return <Navigate to="/login"/>
      // }

}

export default AuthGaurd ; 
