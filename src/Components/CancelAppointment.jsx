import React, { useEffect, useState } from "react";
import{useParams} from "react-router-dom";
import AppointmentService from "../Services/AppointmentService";
import ViewAppointment from "./ViewAppointment";
import Footer from "./Footer";

let CancelAppointment = () => {
  
    let{apid}=useParams();
    let[msg,setMSg]=useState("");

    useEffect(()=>{
        let promise=AppointmentService.cancelAppointment(apid);

        promise.then((res)=>{
            setMSg(res.data);
        }).catch((res)=>{
            setMSg(res.data);
        });
    });
    return (
    <>
     
      <div>
        <center>
          <br/>
          <ViewAppointment/>
        </center>
        </div>
        <br/><br/><br/><br/><br/>
            <Footer />
    </>
  );
};

export default CancelAppointment;
