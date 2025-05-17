
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
  const  revenueReducer  = useSelector(res => res.revenueReducer);
  const adminReducer  = useSelector(ress=>ress.adminReducer)


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

     xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      style: {
        colors: Array(12).fill('#fff'), // Sabhi x-axis labels white
        fontSize: '14px'
      }
    } 
  },
  yaxis: { 
    labels: {
      style: {
        colors: adminReducer.dark ? ['#fff'] : "",  // Y-axis label bhi white
        fontSize: '14px'
      }
    }
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
     ,tooltip: {
       
        theme: adminReducer.dark ? 'dark' : "light",
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
                  categories : revenueReducer.data.months ,
               labels: {
                style: {
                  colors: adminReducer.dark ? Array(12).fill('#fff') : "", // Sabhi x-axis labels white
                  fontSize: '14px'
                }
              }
                  
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
        

          <CardContent>
            <Typography variant="h5" component="div">
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