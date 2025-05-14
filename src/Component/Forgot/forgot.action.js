
import axios from "axios";
  import { EMAIL_SENDED ,
  USERNOT_FOUND  ,
  FORGOT_REQUEST ,
  PASSWORD_CHANGE_REQUEST,
  PASSSWORD_CHANGE ,
  INVALID_CODE
 } from "./forgot.state";

axios.defaults.baseURL = "http://localhost:3030"

const forgotRequest = (e)=>{
    e.preventDefault() ;
    const email = e.target[0].value
        return async(setDispatch)=>{
          try{
               setDispatch({
                  type : FORGOT_REQUEST 
               })
                let response = await axios({
                      method :"post" ,
                      url : "/forgot-password" ,
                      data : {
                         email : email
                      }
                })

                  setDispatch({
                      type : EMAIL_SENDED
                })
          }
          catch(error){
               setDispatch({
                 type : USERNOT_FOUND
               })
          }
        }
}

const changePassword =(e , formdata)=>{
        e.preventDefault() ; 
        console.log(formdata)
        return async(setDispatch)=>{
                 
            try{
                   setDispatch({
                     type : PASSWORD_CHANGE_REQUEST 
                   })

             let response  = await axios({
                          method :  "put" , 
                          url : "/forgot-password" ,
                          data : formdata
                                             })

               setDispatch({
                type :  PASSSWORD_CHANGE
               })

                }
            catch(error){
                      
                       setDispatch({
                        type : INVALID_CODE
                       })
                          }
        }
      
}

export {
     forgotRequest ,
     changePassword 
} ; 