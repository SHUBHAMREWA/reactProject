
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid'  ;
import { Card , Button , CardContent ,CardActions , ButtonGroup } from '@mui/material';
import { useRef } from 'react';
import "./Calender.css"

const Calender =()=>{
  
     const Cal =  useRef()

     const nextMonth = ()=>{
              Cal.current.getApi().next()
     }

     const prevMonth =()=>{
             Cal.current.getApi().prev()
     }

    const todayDate =()=>{
             let date = new Date() ;
             let dd = date.getDate() ;
             let mm = date.toLocaleDateString('default' , {month : "short"})
             let yy = date.getFullYear() ;
          
          dd = dd < 10 ? "0"+dd : dd 

          return dd +" "+mm+ " "+ yy
    }


    const design =(
        <>
       
          <Card sx={{
            textAlign: "center",
            m : "auto",
            width : "70%",
            height : "100%"}}  >
                <CardContent className='px-2 overflow-none'>
                       <div className="d-flex justify-content-between align-items-center
                       ">
                             <ButtonGroup>
                                
                                    <Button
                                    onClick={prevMonth}
                                     className="py-2">
                         <span className='material-icons'>navigate_before</span>

                                        Prev</Button>
                                        

                                    <Button 
                                    onClick={nextMonth}
                                     className="py-2">Next
                         <span className='material-icons'>navigate_next</span>
                                    </Button>

                             </ButtonGroup>  
                              
                              <h4>{todayDate()}</h4>

                              <button className='btn border bg-warning'
                              >Go-Today</button>

                       </div>
                       <FullCalendar  
                           ref={Cal}
                           plugins={[dayGridPlugin]}
                           initialView='dayGridMonth'
                           events={[
                            {
                                title : "my badday" ,
                                date : "2025-05-16" ,
                                color : "orange" ,
                             
                                
                            }
                           ]}
                           headerToolbar={{
                             start : "" ,
                             center : "" ,
                             end : ""
                           }}
                           eventDisplay='list-item'
                       />
                </CardContent>
            </Card>     
        </>
    )

    return design ;

}

export default Calender ;