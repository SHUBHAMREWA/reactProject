
import {  
     Grid, Card ,
      CardMedia  , CardContent ,
       CardActions , Typography   ,
       Button

     } from "@mui/material";

import Chart from "react-apexcharts";
import { useState } from "react";

const Purchase =()=>{

       const options = {
               labels : [
                     "Laptop", 
                     "Mobile",
                     "GameHeadset",
                     "Blutooth" ,
                     "keyboard"
               ]
       }

       const [series ,setSeries]  = useState([ 334, 57,888,234,66 ])

    const design =(
        <>
          <Grid size={{xs :12, md : 3}}>
                 <Card style={{height : "220px"}}>
                         
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