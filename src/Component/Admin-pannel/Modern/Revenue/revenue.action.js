
import {  REVENUE_REQUEST ,
    REVENUE_SUCCESS } from "./revenue.state";

    import axios from "axios"

    axios.defaults.baseURL = "http://localhost:30303"


const revenueRequest  = ()=>{
          return async(setDispatch)=>{


            try{
                 const response = await axios({
                     method : "get",
                     url : "revenue-updates"
                 })

                 console.log(response)
                //   setDispatch({
                //     type :  REVENUE_REQUEST
                //    })
            }
            catch(error){
                setDispatch({
                      type :  REVENUE_SUCCESS
                })
            }

          }
}


export default revenueRequest ;