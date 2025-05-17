
const model =  {
         dark : false
}

const adminReducer =(state= model , action )=>{
             
    switch(action.type){
           case "dark" : return {
             ...state ,
             dark : true
           }
           case "light" : return {
               ...state ,
               dark : false 
           }
           default  : return state ;
    }
    
}

export default adminReducer ;