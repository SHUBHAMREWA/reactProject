import { Outlet  , Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AuthGaurd = ()=>{
        const cookie =  new Cookies() ;
        const data   =   cookie.get("authToken") ;
        let isLogged  =  !!data
      

   
 return  ( 
              isLogged ? <Outlet/> : <Navigate to="/login" />
         )
}

export default AuthGaurd ; 
