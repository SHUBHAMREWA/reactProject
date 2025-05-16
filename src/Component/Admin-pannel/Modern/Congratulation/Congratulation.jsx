
import {
       Grid, Card,
       CardMedia, CardContent,
       CardActions, Typography,
       Button

} from "@mui/material";

import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import "../Congratulation/Congratulation.css"


const Congratulation = () => {

const options  = {
       chart : {
               toolbar : {
                   show    : false
               },
               sparkline : {
                      enabled :  true
               }
       } ,

       theme : {
               palette : "palette2"
       },
       title : {
            text : "19,000$" ,
            style : {
              fontSize: "18px" 
            }
       }
       
            }

const [series ,setSeries]  = useState([
       {
              name : "Earning" ,
              data  : [2,30,40,57, 63,75,56,37,47,8,78,9,99]
       }
        
])



       const design = (
              <>
                     <Grid size={{ xs: 12, md: 5 }}>
                            <Card className="card-box">
                                   <CardMedia>
                                          <img src="adanilogo.png" alt="" />
                                   </CardMedia>

                                   <CardContent>
                                          <Typography>
                                                 sales
                                          </Typography>
                                   
                                   <Chart
                                    options={options}
                                    series={series} 
                                    type = "area" 
                                    height="160px"
                                    className = "chart"
                                    >

                                   </Chart>

                                   </CardContent>
                            </Card>
                     </Grid>

              </>
       )


       return design;
}

export default Congratulation ;