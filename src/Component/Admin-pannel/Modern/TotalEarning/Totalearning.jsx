
import {  
     Grid, Card ,
      CardMedia  , CardContent ,
       CardActions , Typography   ,
       Button

     } from "@mui/material";



const Totalearning =()=>{

    const design =(
        <>
                  <Grid size={{xs :12, md : 3}}>
                 <Card>
                        <CardMedia>
                                <img src="adanilogo.png" alt="" />
                        </CardMedia>
                         
                        <CardContent>
                                 <Typography> 
                                    kya ho riya
                                 </Typography>
                        </CardContent>

                        <CardActions>
                               <Button>     click here      </Button>
                               <Button>     click here 2      </Button>
                        </CardActions>
                 </Card>
          </Grid>

        </>
    )


    return design ;
}

export default Totalearning ;