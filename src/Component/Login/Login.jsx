
import { Grid ,Container ,Stack, Button ,TextField  ,Checkbox , FormControlLabel  } from "@mui/material";  
import { useState  ,useEffect} from "react";
import {Link , useNavigate } from "react-router-dom" ;
import * as yup from "yup" 
import { useDispatch , useSelector } from "react-redux";
import {loginRequest} from "./login.action"  ;
import Cookies from "universal-cookie";

// Login Componet 
const Login =()=>{

     const dispatch = useDispatch(); 
     const {loginReducer} = useSelector(res=>res) 
 

    const [loginDisable , setLoginDisable]  =  useState(true) ; 
    const [error , setError]                = useState({
             username : {
                     error : false , 
                     helperText :  ""
             }  , 
             password : {
                  error : false ,
                  helperText : ""
             }
    })

    const [input ,setInput]  = useState({
           username :  "" ,
           password : ""
    })
    const [remember , setRemember]    = useState(false) ;
    const cookie   =  new Cookies()
 


    const CheckForLogin =()=>{
        
          if(loginReducer.isLogged){
               cookie.set("authToken" , loginReducer.data.token , {maxAge : 86400 })
               navigate("/admin-panel/dashboard/modern")
          }
          else if(loginReducer.userNotFound){
                return  setError((oldData)=>{
                            return {
                                 ...oldData , 
                                 username : {
                                        error : true ,
                                        helperText : "Wrong Email"
                                 }
                            }
                })
          }
          else if(loginReducer.incorrectPassword){
                  return setError((oldData)=>{
                     return {
                         ...oldData ,
                           password : {
                                error : true , 
                                helperText : "wrong Password"
                           }
                     }
                  })
          }
          else if(loginReducer.networkerror){
                 alert("check you Network wifi and mobile Data")
          }
         
    }

    const rememberForLogin =() =>{
         let getUserData = localStorage.getItem("loginUserInfo") ;
         if(getUserData){
             let getData  = JSON.parse(getUserData) ;
             return(
                 setInput(getData) ,
                 setLoginDisable(false) 
             )

         }
    }
    
    useEffect(()=>{
        rememberForLogin() ;
        CheckForLogin() ;
    } , [loginReducer])


    const schema = yup.object().shape({
        username :  yup.string().required().email() , 
        password :  yup.string().required().min(8).max(15)
    }) ;

    const validateSubmit = async()=>{
           let isValid = await schema.isValid(input)  ;
              return   setLoginDisable(!isValid)       ;                         
    }

    const checkInput = async(e)=>{
             let key = e.target.name
         try{ 
            await schema.validateAt(key , input)  
            return setError((oldData)=>{
                  return {
                    ...oldData, 
                     [key] :{
                          error : false , 
                          helperText : ""
                     }
                  }
            })
            
         }
         catch(error){
              let massage = error.errors[0] ; 
             return setError((oldData)=>{
                   return {
                         ...oldData ,
                         [key] : {
                            error : true , 
                            helperText : massage
                         }
                   }
             })
         }
    }

    const handleInput =(e)=>{

          let input = e.target ;
          let key   =  e.target.name ;
          let value = e.target.value ;

        return ( 
            setInput((oldData)=>{
                    return { 
                          ...oldData , 
                          [key]  : value
                    }
            })
        )

    }

    const navigate = useNavigate()

    const login =(e)=>{
          e.preventDefault()
          if(remember){
               const rememberUserData = JSON.stringify(input);
               localStorage.setItem("loginUserInfo" , rememberUserData)
          }
          if(!remember && localStorage.getItem("loginUserInfo")){
              localStorage.removeItem("loginUserInfo")
          }
         
        dispatch(loginRequest(input)) 
    }


    // Login design 
    const design =(
        <>
         <Container>

            <Grid container> 
                
                <Grid size={{sm:6 , xs:12}} sx={{}} >
                   <img
                   style={{
                    marginTop :  "4rem" ,
                
                } }
                   src="images/loginImg.png"  width="100%" />
                </Grid>


                <Grid size={{sm:6 ,xs:12 }} sx={{ }} >
                    <h1>Login</h1>
                    <form onSubmit={login}>

                        <Stack 
                        direction="column"
                        alignItems=""
                        spacing={3}>

                        <TextField
                          name="username"
                          label="username" 
                          variant="outlined"
                          value = {input.username}
                          onChange={handleInput}
                          type="text"
                          onKeyDown={validateSubmit}
                          error = {error.username.error} 
                          helperText  = {error.username.helperText}
                          onInput={checkInput}
                          />
                         <TextField 
                          name="password" 
                          label="password" 
                          variant="outlined"
                          value = {input.password}
                          onChange={handleInput}
                          type="password"
                          onKeyDown={validateSubmit}
                          error = {error.password.error} 
                          helperText  = {error.password.helperText} 
                          onInput= {checkInput}
                          />

                        

                         <Stack
                         direction="row"
                         justifyContent="space-between" 
                         alignItems="center"  
                           >
                            <FormControlLabel
                             control={
                             <Checkbox 
                             onClick={()=> setRemember(!remember)} 
                             checked={remember}
                              size="large"
                              />} 
                             label="Remember Me !"/>
                           
                             <Button 
                        loading = {loginReducer.isLoading ? true : false}
                          disabled={loginDisable}  
                          type="submit"
                          variant="contained" 
                          color="secondary"
                          sx={{px:5}}
                          >Login</Button>
                          </Stack>

                          <Stack 
                          direction="row"
                          justifyContent="space-between" 
                          alignItems="center"
                           >
                                        <Link to="/"
                                        style={{textDecoration : "none"}}
                                        >Create New Account </Link>

                                    <Link to="/forgot-password"
                                        style={{textDecoration : "none"}}
                                        >Forgot Password !</Link>
                          </Stack>
                        </Stack>
                      
                    </form>
                </Grid>

            </Grid>
         </Container>
        </>
    )
   return design

}


export default Login ;