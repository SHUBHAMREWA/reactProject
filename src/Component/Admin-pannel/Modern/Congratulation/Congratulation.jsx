
import {
       Grid, Card,
       CardMedia, CardContent,
       CardActions, Typography,
       Button

} from "@mui/material";

import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import "../Congratulation/Congratulation.css"
import { useSelector } from "react-redux";


const Congratulation = () => {

        const adminReducer = useSelector(res=>res.adminReducer)

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
               palette : "palette1"
       },
       title : {
            text : "19,000$" ,
            style : {
              fontSize: "18px"  ,
              color :   adminReducer.dark ? "white" : "black"
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
                            <Card 
                            sx={{ bgcolor : adminReducer.dark ? "#1e1e1e" : "white"}}
                             className="card-box">
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