
import { LOGIN_REQUEST ,  LOGIN_SUCCESS ,
    USER_NOT_FOUND,
    INCORRECT_PASSWORD ,
  LOGOUT_SUCCESS ,
    LOGOUT_FAILED, 
    LOGIN_NETWORK_ERROR} from "./login.state";

    const model = {
          isLoading : false , 
          userNotFound : false ,
          incorrectPassword : false, 
          isLogged : false ,
          data  : null ,
          logout : false ,
          logoutfail : false  ,
         networkerror  : false
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
                  logoutfail : false  ,
                  networkerror  : false
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
                     networkerror  : false
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
               networkerror  : false
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
                    networkerror  : false
                }
                case LOGOUT_SUCCESS  : return {
                    ...state , 
                      isLoading : false,
                     userNotFound : false ,
                      isLogged : false,
                     incorrectPassword : false, 
                     data  :  null ,
                    logout : true ,
                    logoutfail : false  ,
                     networkerror  : false
                }
                case LOGOUT_FAILED : return {
                     ...state , 
                        isLoading : false,
                     userNotFound : false ,
                      isLogged : false,
                     incorrectPassword : false, 
                     data  :  null ,
                    logout : false ,
                    logoutfail : true   ,
                     networkerror  : false
                }
                case LOGIN_NETWORK_ERROR : return {
                      isLoading : false , 
                    userNotFound : false ,
                    incorrectPassword : false, 
                    isLogged : false ,
                    data  : null ,
                    logout : false ,
                    logoutfail : false  ,
                    networkerror  : true
                }

                default : return state ;
         }
    }

    export default loginReducer  ;