

import { Grid } from "@mui/material";
import Congratulation from "./Congratulation/Congratulation";
import Purchase from "./Purchase/Purchase";
import Revenue from "./Revenue/Revenue";
import Totalearning  from "./TotalEarning/Totalearning";


const Modern =()=>{

    const design =(
        <>
        <Grid container spacing={5}>
             <Congratulation/>
              <Purchase/>
              <Totalearning/>
              <Revenue/>
        </Grid>
        </>
    )

    return design
      
}


export default Modern  ;