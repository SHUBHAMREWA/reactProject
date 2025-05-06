
import {   SIGNUP_SUCCESS , 
    SIGNUP_REQUEST ,
     SIGNUP_ERROR } from "./signup.actionType" ; 

  import axios  from "axios";   
  axios.defaults.baseURL = "http://localhost:3030"

const signupRequest = (formData)=>{
           
      return async(setDispatch)=>{

            try{
                 setDispatch({
                    type : SIGNUP_REQUEST  ,
                    payLoad : []  
                 })

                 const response = await axios({  
                             method : "post" ,
                             url : "/signup" ,
                             data : formData
                 })

                 setTimeout(()=>{
                  setDispatch({
                        type : SIGNUP_SUCCESS  ,
                        payLoad : response.data
                     })
                 } , 1000)

               
            }
            catch(error){
                  setTimeout(()=>{
                        setDispatch({
                              type : SIGNUP_ERROR ,
                              error : error.response.data.message
                          })
                  },1000)
                
            }
      }
}

export {
      signupRequest 
}