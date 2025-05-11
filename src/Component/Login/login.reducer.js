
import { LOGIN_REQUEST ,  LOGIN_SUCCESS ,
    USER_NOT_FOUND,
    INCORRECT_PASSWORD  } from "./login.state";

    const model = {
          isLoading : false , 
          userNotFound : false ,
          incorrectPassword : false, 
          isLogged : false ,
          data  : null ,

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
                }
                case LOGIN_SUCCESS : return { 
                     ...state ,
                     isLoading : false,
                     userNotFound : false  , 
                      isLogged : false,
                     incorrectPassword : true, 
                     data  :  action.payLoad ,
                }
                case USER_NOT_FOUND : return { 
                     ...state ,
                     isLoading : false,
                     userNotFound : true ,
                      isLogged : false,
                     incorrectPassword : false, 
                     data  :  null ,
                }
                case INCORRECT_PASSWORD : return { 
                     ...state ,
                     isLoading : false,
                     userNotFound : false ,
                      isLogged : false,
                     incorrectPassword : true, 
                     data  :  null ,
                }

                default : return state ;
         }
    }

    export default loginReducer  ;