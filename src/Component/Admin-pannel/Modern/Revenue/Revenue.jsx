
import {  
     Grid, Card ,
      CardMedia  , CardContent ,
       CardActions , Typography   ,
       Button

     } from "@mui/material";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts" ;
import { useState ,useEffect } from "react";
import revenueRequest from "./revenue.action";
import { useDispatch , useSelector } from "react-redux";


const Revenue =()=>{

  const dispatch = useDispatch();
  const response  = useSelector(res=>res) ;

  const getRevenue =()=>{
         return dispatch(revenueRequest())
  }


  useEffect(()=>{
         getRevenue()
  } , [response])

  const [series ,setSeries]  =  useState([
    { 
      name : "Profit" ,
      data  :[23,23,23,23,23,70,8 ]
    },
    {
      name : "Loss" ,
      data : [1,2,4,5,6,6,66]
    }
  ])
  const [options ,setOptions]  =  useState({
               xaxis : {
                    categories : [
                         "january" ,
                         "febuary",
                         "March", 
                         "April",
                         "May",
                         "June" ,
                         "July"
                    ]
               } ,

               theme : {
                  mode : "light" ,
                  palette  :"palette7" ,
                  
               }


              // colors : [ "#438023", "#923444" ]
  })

    const design =(
        <>
          <Grid size={{xs :12, md : 6}}>
                 <Card>
                        <CardMedia>
                                <img src="adanilogo.png" alt="" />
                        </CardMedia>
                         
                        <CardContent>
                                 <Typography> 
                                    Revenue Updates
                                 </Typography>

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


export default Revenue  ;