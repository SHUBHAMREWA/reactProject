import {  SIGNUP_SUCCESS , 
    SIGNUP_REQUEST ,
     SIGNUP_ERROR} from "./signup.actionType" ;


     const model ={
         isLoader : false , 
         error :   null ,
         data :    null
     }

const signupReducer =( state = model , action)=>{
             
    switch(action.type){
          case SIGNUP_REQUEST  : return {  
                ...state ,
              isLoader  : true ,
              error :   null ,
              data :    null          
          }
          case SIGNUP_SUCCESS  : return {  
              ...state ,
                data  : action.payLoad ,
                isLoader : false  , 
                error    : null           
          }
          case SIGNUP_ERROR  : return {  
              ...state ,
              error : action.error  ,
              data  : null  ,
              isLoader : false           
          }
          default : return {
            isLoader : false , 
            error :   null ,
            data :    null
        }
    }
           
}

export {
     signupReducer
}