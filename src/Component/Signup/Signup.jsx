
import {Link , useNavigate} from "react-router-dom" ;
import { Button , Grid, Typography  , stack ,
        TextField  , FormControlLabel  , Checkbox , 
        FormGroup,
        Stack 
 } from "@mui/material";  
 
import { useState , useEffect } from "react";
import{ useHttp  }from "../../Hooks/useHttp";
import SweetAlert from 'react-bootstrap-sweetalert';
import Cookies from "universal-cookie";
import { useSelector , useDispatch } from "react-redux";
import { signupRequest } from "./signup.action";


// SignUp Component
const Signup =()=>{

   const dispatch  = useDispatch() ;
   const response = useSelector(res=>res) ;
   console.log(response)
   const {signupReducer}  =  useSelector(res=>res) ;

   console.log(signupReducer)
   const cookie  = new Cookies() ;

    const signUpForm = {
          fullname : "shubham kushwaha",
          email    : "shubham@gmail.com" ,
          password : "Shubham@123" ,
          mobile   : "7898522932"
                    }


const formValidations = {
       fullname : {
            error  : false ,
            helperText : ""
       } ,
      email : {
         error  : false ,
            helperText : ""
      },
      password : {
            error  : false ,
            helperText : ""
      } ,
      mobile: {
           error  : false ,
            helperText : ""
      }
}
    
  const [input, setInput]  =  useState(signUpForm)  ;
  const [warnValidation , setWarnValidation]    = useState(formValidations);
  const [check , setCheck]                      = useState(false) ;
  
  const [sweetAlert ,setSweetAlert]             = useState({
       state : false ,
       title : "" ,
       icon  : "" ,
       message : "" ,
  })



  useEffect(()=>{
        if(signupReducer && signupReducer.error){
            return (
              setSweetAlert({
                state : true ,
                title : "failed" ,
                icon  : "error" ,
                message :  signupReducer.error ,
              })
            )
        }

        if(signupReducer && signupReducer.data){
           
          cookie.set("authToken" , signupReducer.data.token , {path : "/" ,  maxAge : 86400})

               return(
                setSweetAlert({
                  state : true ,
                  title : "Signup successful" ,
                  icon  : "success" ,
                  message : "Signup successful! You can login now."
                }
                )
               )
        }
  }, [signupReducer])
  
  



//   input field Validation 

  const signUpFormValidation = (e)=>{
        let input = e.target ; 
        let prop  = input.name ;
        let result = required(input) ;
       
        return (  
              setWarnValidation((oldData)=>{
                return (
                    {
                        ...oldData ,
                        [prop] : result
                    }
                )
              })
        )
           

  }

  const required =(input)=>{
       let val = input.value ; 
       if(val == ""){
        return (
             {
                error : true , 
                helperText : "this field is Required"
             }
        )
       }
       else{
          return {
                 error  :  false ,
                 helperText : ""
          }
       }
  }


//   Email Validation
  const emaiValidation = (e) => { 
           let input = e.target ;
           let prop = input.name ;
           let isEmptyInput = required(input) ;
           let emailCheck    =  emailSyntax(input)
            setWarnValidation((oldData)=>{
                 return {
                     ...oldData, 
                     [prop]  : isEmptyInput.error && isEmptyInput || emailCheck
                 }
           })
     
  }

  const emailSyntax =(input)=>{
             const value = input.value.trim();
             const regex  = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g  ;
                  if(regex.test(value)){
                    return {
                          error : false ,
                          helperText: ""
                    }
                  }
                  else{
                   return {
                        error  : true ,
                        helperText: "this email is not valid"
                   }
                  } 
  }

//  Password Validation 
const passwordValdation =(e) =>{   
       let input = e.target ;
       let prop  =  input.name ;
       let isEmptyInput =  required(input) ;
       let passwordCheck = passwordSyntax(input) ;
       let checkLenght  = passwordLength(input , 15)
       setWarnValidation((oldData)=>{
          return {
            ...oldData, 
            [prop]  : (isEmptyInput.error && isEmptyInput) || (passwordCheck.error  && passwordCheck) || (checkLenght.error && checkLenght)
          }
       })

}  

const passwordSyntax = (input) => {
         let value = input.value ;
         let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]+$/; 
         if(regex.test(value)){
             return {
                error : false ,
                helperText : ""
             }
         }
         else{
            return {
                error  : true ,
                helperText : "please contains uppercase ,lowercase ,numbers and symbols !"
            }
         }
}

const passwordLength =(input, length)=>{ 
   let minLength  = ( length-7 )  ;
   let maxLength  = length  ;
   let value =  input.value.trim(); 

     if(value.length < minLength){
          return {
            error : true ,
            helperText : "min 8 charaters Required in password"
          }
     }
     else if(value.length > maxLength){
                return {
                    error : true ,
                    helperText : "max 15 chareters you can Use"
                }
     }
     else{
          return {
              error : false ,
              helperText : ""
          }
     }

}

// mobile Validation  
const mobileValidation =(e)=>{
      let input = e.target   ;
      let prop  = input.name ;  
      let result  =  required(input) ;
      let checkMobileLenght =  mobileLength(input , 13)
       
      setWarnValidation((oldData)=>{
            return {
                ...oldData , 
                [prop] : result.error && result || checkMobileLenght.error && checkMobileLenght 
            }
      })
}

const mobileLength =(input , maxLength)=>{
            let value  =    input.value ;
            let minLength =  (maxLength-9) ;
            let mLength  =  maxLength  ;   
            
            if(value.length < minLength){
                return {
                    error : true  ,
                    helperText :  "insert min 4 charater"
                }
            }
            else
             if(value.length > mLength){
                 return {
                    error : true ,
                    helperText : "Max 15 charater you can Insert"  
                 }
                } 
                 else{
                    return {
                      error : false ,
                      helperText : ""
                    }
               }

}


//   Set Input Value  
  const updateValue = (e)=>{
       let inVal = e.target.value  ;
       let prop  =  e.target.name

       return ( 
        setInput((oldData)=>{
            return {
                   ...oldData , 
                   [prop ]: inVal
            }
        })
        )   
  }


//   Register 
const validateOnSubmit =()=>{
     let valid = true ;
     for(let data in input){

           if(input[data].length === 0 ){
            
             valid = false ;
            setWarnValidation((oldData)=>{
                  return {
                     ...oldData , 
                    [data] : {
                         error : true ,
                         helperText  :  "This field is Required"
                    }
                  }
            })
           }
         }

     return valid ;    
}


const register =(e)=>{
    e.preventDefault()
  let isValid =   validateOnSubmit()  

   if(isValid){

    return (  
         dispatch(signupRequest(input))
        )
      
   }
}


 // -- Design  --//
    const design = (

        <>
              <SweetAlert 
                title ={sweetAlert.title}
                show = {sweetAlert.state}
                type = {sweetAlert.icon}
                customButtons = {
                  <>
                  <Button color="error" 
                  sx={{mr : 3}} 
                  onClick={()=>setSweetAlert({state : false })}
                  >Cancel</Button>
                  <Button 
                 LinkComponent={Link} 
                 to = "/admin-panel"
                 variant="contained" color="info" sx={{color: "white"}}>Login</Button>
                  </>
                }
                >
                   {sweetAlert.message}
            </SweetAlert> 
             
        <Grid container>
            {/* left Image */}
             <Grid size={{xs : 12 , md : 6 }}>
                 <img src="images/auth-big.avif" alt="" width="100%" />
             </Grid>

            {/* Right Register Part */}

             <Grid size={{xs : 12 , md : 6 }} 
             sx={{
                  p : {xs : 2 , md : 5 }
             }}
             >
                <Typography variant="h4" sx={{
                  mb : {xs : 2 , md : 4} ,
                  mt : {xs : 0 , md : 2} ,
                 
                }}>
                    Register
                </Typography>  
                 

                 {/* Form  feild  */}
                 <form 
                 onSubmit={register}
                 >
                    <Stack spacing={4}>

                        <TextField label="Full Name"  
                        error= {warnValidation.fullname.error}
                        helperText = {warnValidation.fullname.helperText}
                        variant = "outlined" 
                        name="fullname" 
                        onChange={updateValue}
                        onBlur={signUpFormValidation}
                        onInput={signUpFormValidation}
                        value={input.fullname} />

                        <TextField label ="Mobile"  
                         variant= "outlined" 
                         type="number"
                          name="mobile" error= {warnValidation.mobile.error}
                          helperText = {warnValidation.mobile.helperText}
                        onInput={mobileValidation}
                        onBlur={mobileValidation}
                         onChange={updateValue}
                          value={input.mobile} />

                        <TextField
                         label = "Email" 
                         variant="outlined" 
                         type="email"
                        onChange={updateValue} 
                        error= {warnValidation.email.error}
                        helperText = {warnValidation.email.helperText}
                        onInput={emaiValidation}
                        onBlur={emaiValidation}
                        name="email" 
                         value={input.email}/> 


                        <TextField 
                        label= "Password" 
                        variant="outlined" 
                        type="password" 
                        onChange={updateValue}
                        error= {warnValidation.password.error}
                        helperText = {warnValidation.password.helperText}
                        onInput={passwordValdation}
                        onBlur={passwordValdation}
                        name="password"
                        value={input.password}/>  
                           
                           <Stack direction="row" justifyContent="space-between"  alignItems={"center"}>
                               <FormGroup>
                                   <FormControlLabel control={<Checkbox 
                                     checked ={check}
                                     onClick={()=>setCheck(!check)}
                                    size="large" color="info"/>} label="I accept Terms and Conditions !"  />
                               </FormGroup>
                               <Button 
                               LinkComponent={  Link } 
                               to = "login"
                               >Already Have an Account</Button>
                           </Stack>
                           </Stack>
                     
                        <Button
                        loading = {signupReducer && signupReducer.isLoader}
                       type="submit" 
                       disabled = { 
                        warnValidation.fullname.error || warnValidation.email.error  ||
                        warnValidation.password.error || warnValidation.mobile.error ||
                        !check
                        }
                       variant="contained" 
                       sx ={{width : "100%" , color: "white"}}
                        color="info" 
                        > Register</Button>    
                   
                 </form>
             </Grid>
        </Grid>
       
        </>

    )

    return design ;
}

export default Signup ;  
