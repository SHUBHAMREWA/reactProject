
import { BrowserRouter as Router , 
        Routes , 
        Route
 } from "react-router-dom";
 import "@fontsource/poppins/500.css"
 import Signup from "./Component/Signup/Signup";
import Login  from "./Component/Login/Login";
import Forgot from "./Component/Forgot/Forgot";
import Admin from "./Component/Admin-pannel/Admin" ; 
import Calender from "./Component/Admin-pannel/Apps/Calender/Calender";
import Notes from "./Component/Admin-pannel/Apps/Notes/Notes";
import Reset from "./Component/Resetpassword/Reset";
import LogOut from "./Component/Admin-pannel/LogOut/LogOut";
import PageNotFound from "./Component/Page-notfound/Pagenotfound";
import Modern from "./Component/Admin-pannel/Modern/Modern";
import 'material-icons/iconfont/material-icons.css';
import { ThemeProvider ,  createTheme , Paper } from "@mui/material";
import { deepPurple , teal , pink ,deepOrange , lightBlue, cyan , indigo } from "@mui/material/colors"; 
import AuthGaurd from "./Gaurd/AuthGaurd";
import storage from "./storage";
import { Provider } from "react-redux";
import { useState } from "react";
const App = ()=>{
       
          const [mode , setMode] = useState("light")
  
      storage.subscribe(()=>{
         const {adminReducer} = storage.getState() ;
         if(adminReducer.dark){
                  setMode("dark")
         }
         else{
               setMode("light")
         }
      })

        const Theme = createTheme({
              palette: {
                     primary : deepPurple  ,
                     secondary : teal  ,
                     success  :  cyan ,
                     error     :  pink ,
                     info       :  lightBlue ,
                     warning: {
                            main: '#7986cb',
                           } ,
                   mode : mode
               }  ,
               typography : { fontFamily :  "Poppins"}
        })

       const design = (
              
        <>
       
    <Provider  store={storage}>
        <ThemeProvider theme={Theme}>
                 <Paper>        
                     <Router>
                            <Routes>
                                   <Route path="/" element={<Signup/>}/>
                                   <Route path="/signup" element={<Signup/>}/>
                                   <Route path="/login" element={<Login/>}/>
                                   <Route path="/forgot-password"  element={<Forgot/>}/>
                                   <Route element={<AuthGaurd/>} >
                                          <Route path="/admin-panel" element={<Admin/>}>
                                                 <Route path="dashboard/modern"  element={<Modern/>}/>
                                                 <Route path="calender"  element={<Calender/>}/>
                                                 <Route path="notes" element={<Notes/>}/>
                                                 <Route path="reset-password"  element={<Reset/>}/>
                                                 <Route path="logout" element={<LogOut/>}/>
                                                 <Route path="*" element={<PageNotFound/>}></Route>
                                          </Route>
                                   </Route>
                                   
                                   <Route path="/*" element={<PageNotFound/>}></Route>
                            </Routes>
                     
                     </Router>
                 </Paper>       
        </ThemeProvider>
   </Provider>    

        </>

       )
       return design ;
}


export default App ;