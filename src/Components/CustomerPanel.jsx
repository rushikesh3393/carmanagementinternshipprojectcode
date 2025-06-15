import React from "react";
import { NavLink } from "react-router-dom";

let CustomerPanel=()=>{
    return(<>
    
    <div className="admin">

     <div className="sidebar ">

       <NavLink to="/bookAppointment" className="nav-link">Book Appointments</NavLink>
       <NavLink to="/viewCustomerAppointment" className="nav-link">View Appointment</NavLink>
       <NavLink to="/updateCustomerAppointment/:apid" className="nav-link">Reschedule Appointments</NavLink>
       <NavLink to="/cancelCustomerAppointment/:apid" className="nav-link">Cancel Appointments</NavLink>
       <NavLink to="/viewCustomerReceipt" className="nav-link">View Receipt</NavLink>
       <NavLink to="/payment" className="nav-link">For Payments</NavLink>
       <NavLink to="/userHistory" className="nav-link">History</NavLink>
</div>
<div className="rightsidebar">
<div className="sidebarheading">
  <p>Professional Car  Care Services <br /> Is Here</p>
</div>
</div>
</div>
    </>);
}
export default CustomerPanel;