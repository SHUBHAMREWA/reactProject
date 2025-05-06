
import { BrowserRouter as Router , 
        Routes , 
        Route
 } from "react-router-dom";
 import "@fontsource/poppins/500.css"
 import Signup from "./Component/Signup/Signup";
import Login  from "./Component/Login/Login";
import Admin from "./Component/Admin-pannel/Admin" ; 
import PageNotFound from "./Component/Page-notfound/Pagenotfound";
import Dashboard from "./Component/Admin-pannel/Dashboard";
import 'material-icons/iconfont/material-icons.css';
import { ThemeProvider ,  createTheme } from "@mui/material";
import { deepPurple , teal , pink ,deepOrange , lightBlue, cyan , indigo } from "@mui/material/colors"; 
import AuthGaurd from "./Gaurd/AuthGaurd";
import storage from "./storage";
import { Provider } from "react-redux";

const App = ()=>{
  
        const Theme = createTheme({
              palette: {
                     primary : deepPurple  ,
                     secondary : teal  ,
                     success  :  cyan ,
                     error     :  pink ,
                     info       :  lightBlue ,
                     warning: {
                            main: '#7986cb',
                           }
               }  ,
               typography : { fontFamily :  "Poppins"}
        })

       const design = (
        <>
    <Provider  store={storage}>
        <ThemeProvider theme={Theme}>
        <Router>
              <Routes>
                     <Route path="/" element={<Signup/>}></Route>
                     <Route path="/signup" element={<Signup/>}></Route>
                     <Route path="/login" element={<Login/>}></Route>
                     <Route element={<AuthGaurd/>} >
                            <Route path="/admin-panel" element={<Admin/>}>
                                   <Route path="modern"  element={<Dashboard/>}/>
                                   <Route path="*" element={<PageNotFound/>}></Route>
                            </Route>
                     </Route>
                     <Route path="/*" element={<PageNotFound/>}></Route>
              </Routes>
           
         </Router>
        </ThemeProvider>
   </Provider>    

        </>

       )
       return design ;
}


export default App ;