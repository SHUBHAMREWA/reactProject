

import { Grid ,Container ,Stack, Button ,TextField  ,Checkbox , FormControlLabel  } from "@mui/material";  
import { useState , useEffect } from "react";
import { forgotRequest , changePassword } from "./forgot.action";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from "react-router-dom";




const Forgot =()=>{
     const  dispatch = useDispatch()
     const {forgotReducer}= useSelector(res=>res)

     const navigate = useNavigate()

    const [verifyForm ,setVerifyForm]  = useState(false)
    const [error ,setError]         = useState({
          email :{
              message  : "",
              state : false
          } ,
          code : {
              message : "" ,
              state : false
          }
    })
    const [sweetalert ,setSweetalert]  = useState(false)

    const [input ,setInput]   = useState({
          code : "",
          password : "" ,
          email : ""
    })

    const hadleInput =(e)=>{
            let input = e.target ;
            let key  = input.name   ;
            let val = input.value
             setInput((oldData)=>{
               return {
                ...oldData , 
                [key]   :  val
               }
             })
    }

    const checkUser =()=>{
          if(forgotReducer.success){
              setVerifyForm(true)
          }
          if(forgotReducer.usernotfound){
              return  setError( (oldData)=>{
                  return  {
                         ...oldData ,
                                email : {
                             state  : true ,
                             message : "User Email not found"
                        } }
                } )
          }
    }

  const checkForgotFun =()=>{
           if(forgotReducer.passwordChange){
                setSweetalert(true)
           }
           else if(forgotReducer.invalidCode){
               return setSweetalert((oldData)=>{
                    return {
                        ...oldData ,
                        code : {
                               message : "Invalid Code " ,
                              state : true
                        }
                    }
               })
           }
  }

    useEffect(()=>{
       checkUser() 
       checkForgotFun ()
    } , [forgotReducer])
     
           return (
            <>

         <SweetAlert
            title = "Password Updated"
            show = {sweetalert}
            type = "success"
            customButtons = {
                <>
                <Button
                onClick={()=>navigate("/login")}
                 variant="contained"
                  color="secondary">Login</Button>
                </> 
                }>
            Password Change try to Login
         </SweetAlert>

            <Container>

            <Grid container> 
                
                <Grid size={{sm:6 , xs:12}} sx={{}} >
                   <img
                   style={{
                    marginTop :  "4rem" ,
                
                } }
                   src="images/forgotimg.png"  width="100%" />
                </Grid>


                <Grid size={{sm:6 ,xs:12  }} sx={{mt  :9 }} >
                    <h1>Forgot Password</h1>
                
               {
                 !verifyForm ?
                            <form onSubmit={(e)=>dispatch(forgotRequest(e))}>
                            <Stack spacing={3}>
                                                
                            <TextField
                            name = "email"
                            label ="Email" 
                            variant="outlined"
                            error ={error.email.state}
                            helperText={error.email.message}
                            value= {input.email}
                            onChange={hadleInput}
                            />
                            <div 
                            style={{display : "flex", justifyContent : "start"}} 
                            >
                            <Button
                            type="submit"
                            variant="contained"
                            color ="error"
                            loading ={forgotReducer.isLoading}>
                            Forgot
                            </Button>
                                </div>
                            </Stack>
                    
                        
                        </form>
                      :
                        <form onSubmit={(e)=>dispatch(changePassword(e ,input))}>
                            <Stack spacing={3}>

                            <TextField
                            name ="code"
                            label= "Enter code here" 
                            type ="number"    
                            value =  {input.code}
                             onChange={hadleInput}     
                             error={error.code.state}        
                             helperText = {error.code.message}        
                            />
                            
                            <TextField
                            type="text" 
                            label="Create New Password"
                            name= "password"
                            value = {input.password}
                             onChange={hadleInput}
                            />

                        <div>
                            <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            loading ={forgotReducer.isLoading}
                            >
                                    Submit
                            </Button>
                            </div>

                            </Stack>
                        </form>
               }

                </Grid>

            </Grid>
         </Container>
             </>
           )
}

export default Forgot ;