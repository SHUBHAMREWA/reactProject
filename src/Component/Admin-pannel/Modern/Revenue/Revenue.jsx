
import {
  Grid, Card,
  CardMedia, CardContent,
  CardActions, Typography,
  Button

} from "@mui/material";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import revenueRequest from "./revenue.action";
import { useDispatch, useSelector } from "react-redux";
import { render } from "@testing-library/react";
import { reverseEasing } from "framer-motion";


const Revenue = () => {

  const dispatch = useDispatch();
  const { revenueReducer } = useSelector(res => res);

  console.log(revenueReducer)

  const getRevenue = () => {
    return dispatch(revenueRequest())
  }


  const [series, setSeries] = useState([

    {
      name: "Earings",
      data: []
    },

    {
      name: "Expenses",
      data: []
    }


  ])

  const [options, setOptions] = useState({
    xaxis: {
      categories:  []
    },

   chart : { 
     toolbar : {
        tools   : {
             zoom : false ,
             zoomin : false , 
             zoomout : false ,
             pan : false , 
             reset : false 
        }
     }
   }
     

  })

 const setRevenue = ()=>{

        return (
          
          setSeries([
                   {
                         name : "Earnings" ,
                         data  : revenueReducer.data.earning
                   },
                   {
                         name  : "Expenses"  ,
                         data : revenueReducer.data.expenses
                   }
        ])    ,

        setOptions((oldData)=>{
              return {
               ...oldData ,
               xaxis : {
                  categories : revenueReducer.data.months
               }
              }
        })
      
    )
 }


  useEffect(() => {
      if(revenueReducer.loadingRevenue === null){
            getRevenue()
      }

      if(revenueReducer.success){
            setRevenue()
      }
     
  }, [revenueReducer])




  const design = (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardMedia>
            <img src="adanilogo.png" alt="" />
          </CardMedia>

          <CardContent>
            <Typography>
              Revenue Updates
            </Typography>


{/* chart */}
            <Chart
              type="line"
              options={options}
              series={series}
            >

            </Chart>
          </CardContent>
        </Card>
      </Grid>


    </>
  )

  return design

}


export default Revenue;