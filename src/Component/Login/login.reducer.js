
import { LOGIN_REQUEST ,  LOGIN_SUCCESS ,
    USER_NOT_FOUND,
    INCORRECT_PASSWORD ,
  LOGOUT_SUCCESS ,
    LOGOUT_FAILED } from "./login.state";

    const model = {
          isLoading : false , 
          userNotFound : false ,
          incorrectPassword : false, 
          isLogged : false ,
          data  : null ,
          logout : false ,
          logoutfail : false  ,

    }

    const loginReducer  = (state = model,  action)=>{

         switch(action.type){
                case LOGIN_REQUEST : return { 
                     ...state ,
                     isLoading : true,
                     userNotFound : false ,
                     isLogged : false ,
                     incorrectPassword : false, 
                     data  : null ,
                      logout : false ,
                 logoutfail : false  
                }
                case LOGIN_SUCCESS : return { 
                     ...state ,
                     isLoading : false,
                     userNotFound : false  , 
                      isLogged : true,
                     incorrectPassword : false, 
                     data  :  action.payLoad ,
                              logout : false ,
                    logoutfail : false  ,
                }
                case USER_NOT_FOUND : return { 
                     ...state ,
                     isLoading : false,
                     userNotFound : true ,
                      isLogged : false,
                     incorrectPassword : false, 
                     data  :  null ,
                      logout : false ,
              logoutfail : false  ,
                }
                case INCORRECT_PASSWORD : return { 
                     ...state ,
                     isLoading : false,
                     userNotFound : false ,
                      isLogged : false,
                     incorrectPassword : true, 
                     data  :  null ,
                      logout : false ,
                   logoutfail : false  ,
                }
                case LOGOUT_SUCCESS  : return {
                    ...state , 
                      isLoading : false,
                     userNotFound : false ,
                      isLogged : false,
                     incorrectPassword : false, 
                     data  :  null ,
                    logout : true ,
                    logoutfail : false  
                }
                case LOGOUT_FAILED : return {
                     ...state , 
                        isLoading : false,
                     userNotFound : false ,
                      isLogged : false,
                     incorrectPassword : false, 
                     data  :  null ,
                    logout : false ,
                    logoutfail : true  
                }

                default : return state ;
         }
    }

    export default loginReducer  ;