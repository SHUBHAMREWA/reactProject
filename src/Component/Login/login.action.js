import { LOGIN_REQUEST ,  LOGIN_SUCCESS ,
    USER_NOT_FOUND,
    INCORRECT_PASSWORD  } from "./login.state";

 import axios from "axios";   

 axios.defaults.baseURL = "http://localhost:3030"

const loginRequest = (input) =>{
       
    return async(setDispatch)=>{
           try{

            setDispatch({
                type : LOGIN_REQUEST 
            })

               const response =  await axios({
                                     method : "post" ,
                                     url    : "/login" ,
                                     data : input 
                               })

                  setTimeout(()=>{
                    setDispatch({
                        type : LOGIN_SUCCESS  ,
                        payLoad : response.data
                   })
 
                  } , 1000)             
               
            }
           catch(error){
                if(error.response.status === 404){
                    setTimeout(()=>{
                        setDispatch({
                               type : USER_NOT_FOUND
                         })
                    } , 500)
                        
                }
                else if(error.response.status === 401 ){
                    setTimeout(()=>{
                               setDispatch({
                               type : INCORRECT_PASSWORD
                       })
                    } , 500)
                       
                }
           }
    }

}

export {
    loginRequest 
} ;