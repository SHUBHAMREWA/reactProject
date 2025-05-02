
import { Grid ,Container ,Stack, Button ,TextField  ,Checkbox , FormControlLabel} from "@mui/material";  
import {Link , useNavigate  } from "react-router-dom" ;

const Login =()=>{

    const navigate = useNavigate()

    const login =(e)=>{
          e.preventDefault()
          navigate("/admin-panel")
    }

    const design =(
        <>
         <Container>

            <Grid container> 
                
                <Grid size={{sm:6 , xs:12}} sx={{}} >
                    <h1>one</h1>
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
                          type="text"/>
                         <TextField
                          name="password" 
                          label="password" 
                          variant="outlined"
                          type="password"/>

                        

                         <Stack
                         direction="row"
                         justifyContent="space-between" 
                         alignItems="center"  
                           >
                            <FormControlLabel control={<Checkbox size="large"/>} label="Remember Me !"/>
                           
                             <Button 
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
                                        <Link to="#"
                                        style={{textDecoration : "none"}}
                                        >Create New Account </Link>

                                    <Link to="#"
                                        style={{textDecoration : "none"}}
                                        >Forget Password !</Link>
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