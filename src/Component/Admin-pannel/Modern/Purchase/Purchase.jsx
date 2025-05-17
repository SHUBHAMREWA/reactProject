
import {  
     Grid, Card ,
      CardMedia  , CardContent ,
       CardActions , Typography   ,
       Button

     } from "@mui/material";

import Chart from "react-apexcharts";
import { useState } from "react";
import { useSelector } from "react-redux";


const Purchase =()=>{

  const adminReducer = useSelector(res=>res.adminReducer)

       const options = {
               labels : [
                     "Laptop", 
                     "Mobile",
                     "GameHeadset",
                     "Blutooth" ,
                     "keyboard"
               ] ,

                                    legend: {
                    labels: {
                      colors: adminReducer.dark ?  ['white' ,"white" ,"white" ,"white" , "white"] : [] , // Labels ke colors
                      useSeriesColors: false, // Agar tu apne colors use karna chahta hai, isko false rakho
                    }
                  } ,

               
                title : {
               style : {
                    color :   adminReducer.dark ? "white" : "black"
                     }
       }
               
       }

       const [series ,setSeries]  = useState([ 334, 57,888,234,66 ])

    const design =(
        <>
          <Grid size={{xs :12, md : 3}}>
                 <Card 
                  sx={{ bgcolor : adminReducer.dark ? "#1e1e1e" : "white"}}
                 style={{height : "220px"}}>
                         
                        <CardContent>
                                 <Typography> 
                                   Purchase
                                 </Typography>

                                 <Chart
                                 options={options}
                                 series={series} 
                                 type="pie" 
                                 width="100%"
                                 height="100%"
                                 >

                                 </Chart>

                        </CardContent>
                 </Card>
          </Grid>

          
        </>
    )

    return design
      
}


export default Purchase  ;