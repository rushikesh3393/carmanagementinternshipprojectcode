import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import AppointmentService from "../Services/AppointmentService";

let UpdateCustomerAppointment=()=>{
    let{apid}=useParams();
    let[searchId,setSearchId]=useState(apid);
    
        let [appointment,setAppointment] = useState({
            cname: "",
            adate: "",
            atime: "",
            vnumber: ""
          });
    
          let handleChange = (e) => 
            {
              setAppointment(appointment=>{
                return{...appointment,[e.target.name]:e.target.value}});
            };
        
          let[count,setCount]=useState(0);
    
        let searchAppointment=((e)=>{
            if(searchId)
            {
            AppointmentService.searchAppointment(searchId).then((res)=>{
                setAppointment(res.data);
            })
        }
        });
    
        let[msg,setMsg]=useState("");
    
         let updateAppointment=(e)=>{
            e.preventDefault();
        
            let promise=AppointmentService.updateAppointment(appointment);
        
            promise.then((res)=>{
                setMsg(res.data);
            });
        
          };
        
        return(<>

        <div className="updatecust">
        <input type="number" name="ffg" value={searchId} onChange={(e)=>{setSearchId(e.target.value)}} placeholder="Enter the AppointmentId" /> <br/><br/>
        <input type="button" value="Get Appointment" onClick={(e)=>{searchAppointment(e)}} />
        </div>
        <div className="book">
            
                <form>
                <center>
                    <br/><br/>
              <h1> Update Appointment Form</h1>
              <br/><br/>
              <label for="cname">Customer name</label><br/>
              <input type="text" name="cname" value={appointment.cname} onChange={handleChange} placeholder="Customer Name" /> <br /><br />
              <label for="adate">Appointment Date</label><br/>
              <input type="date" name="adate" value={appointment.adate} onChange={handleChange} /> <br /><br />
              <label for="Appointment Time">Appointment Time</label><br/>
              <input type="text" name="atime" value={appointment.atime} onChange={handleChange} placeholder="Time" /> <br /><br />
              <label for="vnumber">Vehicle Number</label><br/>
              <input type="text" name="vnumber" value={appointment.vnumber} onChange={handleChange} placeholder="Vehicle Number(MH10 JK 8998)" /> <br /><br /><br /><br />
              <input type="submit" name="submit" value="Update Appointment" onClick={(e)=>updateAppointment(e)}/>
              <br/>
              
              </center>
              {msg}  
              </form>
              </div>
        
        </>);
}
export default UpdateCustomerAppointment;