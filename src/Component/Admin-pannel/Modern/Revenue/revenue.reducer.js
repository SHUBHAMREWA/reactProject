import {  REVENUE_REQUEST ,
    REVENUE_SUCCESS ,
REVENUE_FAILED
 } from "./revenue.state";

const model ={
        data :  null,
        loadingRevenue : null ,
        error : false ,
        success: false 
}

 const revenueReducer =(state = model , action)=>{


  switch(action.type){
          
        case REVENUE_REQUEST : 
        return {
            ...state ,
            data :  null,
            loadingRevenue : true ,
            error : false ,
            success: false 
             }
        
        case REVENUE_SUCCESS :
         return {
            state, 
              data :  action.payLoad,
            loadingRevenue : false ,
            error : false ,
            success: true 
         }

         case REVENUE_FAILED : 
         return {
            state ,
              data :  null,
            loadingRevenue : false ,
            error : true ,
            success: false 

         }
         default : return state ;
    }
    
        

 }

 export default revenueReducer  ;