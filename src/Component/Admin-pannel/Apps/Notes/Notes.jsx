
import { Grid , Button , List , ListSubheader , ListItem , 
    ListItemButton ,ListItemText , IconButton , 
    FormControl , TextField ,InputAdornment   , InputLabel ,OutlinedInput
 } from "@mui/material";

import { useState } from "react";
import JoditEditor from "jodit-react"
import "./Notes.css"
import { useSelector, useDispatch } from "react-redux";
import setNotesRequest from "./note.action";


const Notes =()=>{



    const dispatch = useDispatch() ;
    const adminReducer = useSelector(res=>res.adminReducer)

    const [saveInput ,setSaveInput]   =  useState(false) ;
    const [note  , setNote]            =  useState('')   ; 
    const [filename , setfilename]     =  useState("")
    const [allFiles  , setAllFiles]   =  useState([])
    


    const saveFile =()=>{
         if(filename != ""){
             return dispatch(setNotesRequest(filename , note)) 
         }
         else{
           
         }
    }

    const design = (
        <>
        
        <div className="shadow-sm p-4 mt-2">
            <Grid container>
                

                 <Grid                 
                 sx={{
                    height :  "" ,
                    borderRight : "2px solid rgb(236, 236, 236)" ,
                    p : 2 ,
                    backgroundColor : adminReducer && adminReducer.dark ? "" : "#f5f5f5"
                }}
                 size={{xs : 12 , sm : 3}}>
                   
                   <div
                    className="d-flex align-items-center gap-4 justify-content-center">
                    <Button variant="outlined" sx={{}}>New File</Button>
                    <Button 
                    onClick={()=>setSaveInput(!saveInput)}
                    variant="outlined"color="error">Save File</Button>
                </div>

                    {
                     saveInput ?
                    <FormControl className="mt-3">
                          <InputLabel>File Name</InputLabel>
                          <OutlinedInput 
                          name="filename" 
                          label="filename"
                          variant="outlined"
                          value= {filename} 
                          onChange={(e)=>setfilename(e.target.value)}
                          endAdornment  = {
                            <InputAdornment>
                               <IconButton 
                               onClick={(e)=>saveFile()}
                               >
                                   <span className="material-icons-outlined">save</span>
                               </IconButton>
                            </InputAdornment>
                          }
                          >

                          </OutlinedInput>
                    </FormControl> 
                    :  
                     null
                    }


                    <List 

                    subheader=
                    {<ListSubheader
                     sx={{bgcolor : 'inherit' , mt : 1}}
                    >saved file</ListSubheader>}   >


                        <ListItem 
                              sx={{p : 0 , m : 0}}  >
                             <ListItemButton>
                                  <ListItemText primary ="my demo file" />
                                  <IconButton className="text-danger">
                                    <span className="material-icons-outlined ">delete</span>
                                  </IconButton>
                             </ListItemButton>
                        </ListItem>

                    </List>

                 </Grid>
                

                 <Grid size={{xs : 12 , sm : 9}}>
                          <JoditEditor 
                          config={{height :"850px"}}
                          value={note} 
                          onBlur={(data)=>{setNote(data)}}
                          />
                 </Grid>
            </Grid>

        </div>
        </>
    )

    return design ;
}

export default Notes ;