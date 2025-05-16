
import {  REVENUE_REQUEST ,
    REVENUE_SUCCESS ,
REVENUE_FAILED
 } from "./revenue.state";

    import axios from "axios"

    axios.defaults.baseURL = "http://localhost:30303"


const revenueRequest  = ()=>{


          return async(setDispatch)=>{

             try{
                  
                setDispatch({
                     type : REVENUE_REQUEST
                })
                
                 const response = await axios({
                     method : "get",
                     url : "revenue-updates" ,

                 })

                  setDispatch({
                    type :  REVENUE_SUCCESS ,
                    payLoad : response.data
                   })
            }
            catch(error){
                setDispatch({
                      type :  REVENUE_FAILED
                })
            }

          }
}


export default revenueRequest ;