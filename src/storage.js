import { createStore ,applyMiddleware , combineReducers } from "redux";  
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { signupReducer } from "./Component/Signup/signup.reducer";
import loginReducer from "./Component/Login/login.reducer";



const middleware = applyMiddleware( logger, thunk)  ; 

const Root =  combineReducers({
      signupReducer ,
      loginReducer
})

const storage = createStore( Root , {} ,  middleware)  ;


export default storage ;