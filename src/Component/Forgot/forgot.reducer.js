import { EMAIL_SENDED ,
  USERNOT_FOUND  ,
   FORGOT_REQUEST ,
  PASSWORD_CHANGE_REQUEST,
  PASSSWORD_CHANGE ,
  INVALID_CODE  } from "./forgot.state";


const model = {
      isLoading : false  ,
      usernotfound : false ,
      success  : false ,
      passwordChange : false ,
      invalidCode   :false
}

const forgotReducer = (state=model, action) => {

  switch (action.type) {
    case FORGOT_REQUEST:
      return {
      ...state,
      isLoading: true,
      usernotfound: false,
      success: false,
      passwordChange : false ,
      invalidCode   :false
      };

    case EMAIL_SENDED:
      return {
      ...state,
      isLoading: false,
      usernotfound: false,
      success: true,
      passwordChange : false ,
      invalidCode   :false  // ← Tumhara success false tha, par email bhej diya to true hona chahiye
      };

    case USERNOT_FOUND:
      return {
      ...state,
      isLoading: false,
      usernotfound: true,
      success: false,
      passwordChange : false ,
      invalidCode   :false
      };

    case PASSWORD_CHANGE_REQUEST :
       return {
      ...state,
      isLoading: true,
      usernotfound: false,
      success: true,
      passwordChange : false ,
      invalidCode   :false
    }
    case  PASSSWORD_CHANGE :
       return {
      ...state,
      isLoading: false,
      usernotfound: false,
      success: true,
      passwordChange : true ,
      invalidCode   :false
    }
    case INVALID_CODE :
       return {
      ...state,
      isLoading: false,
      usernotfound: false,
      success: true,
      passwordChange : false ,
      invalidCode   :true
    }

    default:
      return state; // ← model return mat karo, warna state reset ho jayega
  }
};

export default forgotReducer ;