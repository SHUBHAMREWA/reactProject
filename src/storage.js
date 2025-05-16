import { createStore ,applyMiddleware , combineReducers } from "redux";  
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { signupReducer } from "./Component/Signup/signup.reducer";
import loginReducer from "./Component/Login/login.reducer";
import forgotReducer from "./Component/Forgot/forgot.reducer";
import revenueReducer from "./Component/Admin-pannel/Modern/Revenue/revenue.reducer";



const middleware = applyMiddleware( logger, thunk)  ; 

const Root =  combineReducers({
      signupReducer ,
      loginReducer ,
      forgotReducer, 
      revenueReducer
})

const storage = createStore( Root , {} ,  middleware)  ;


export default storage ;