import { createStore ,applyMiddleware } from "redux";  
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { signupReducer } from "./Component/Signup/signup.reducer";


const middleware = applyMiddleware( logger, thunk)

const storage = createStore( signupReducer , {} ,  middleware)  ;

export default storage ;