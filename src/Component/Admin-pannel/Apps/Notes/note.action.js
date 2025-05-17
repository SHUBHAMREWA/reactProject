
import { NOTE_REQUEST ,
 NOTE_SUCESS,
    NOTE_FAILED  } from "./notes.state";

    import axios from "axios";

     axios.defaults.baseURL = "http://localhost:3030" ;


    const setNotesRequest  = ({filename , note})=>{
               return async()=>{
                try{


                          
                       const response = await axios({
                                   method : "post"  ,
                                   url  : "/notes", 
                                   filename : filename
                                }
                          )

                          console.log(response)
            
                }
                catch(error){
                    console.log(error )
                }
               }
    }


    export default setNotesRequest ;