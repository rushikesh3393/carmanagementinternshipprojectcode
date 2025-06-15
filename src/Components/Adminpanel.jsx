import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./Registration";
import ViewUser from "./ViewUser";
import BookingApp from "./BookingApp";
import ViewAppointment from "./ViewAppointment";

const Adminpanel = () => {
  return (
    
      <div className="admin">

        <div className="sidebar ">
       
        {/* <marquee
            direction="up"
            scrollamount="10"
            onMouseOver={(e) => e.target.stop()}
            onMouseLeave={(e) => e.target.start()}
          > */}
          <NavLink to="/register" className="nav-link">Add Customer</NavLink>
          <NavLink to="/viewUsers" className="nav-link">View User</NavLink>
          <NavLink to="/viewAppointment" className="nav-link">Appointments</NavLink>
          <NavLink to="/viewTechnician" className="nav-link">Technician</NavLink>
          <NavLink to="/viewServices" className="nav-link">Garage Services</NavLink>
          <NavLink to="/viewSpareparts" className="nav-link">Spare Part</NavLink>
          <NavLink to="/generatereceipt" className="nav-link">Generate Receipt</NavLink>
          <NavLink to="/viewreceipt" className="nav-link">View Receipt</NavLink>
          <NavLink to="/payment" className="nav-link">For Payments</NavLink>
          <NavLink to="/history" className="nav-link">History</NavLink>
          {/* </marquee> */}
        </div>
        <div className="rightsidebar">
        <div className="sidebarheading">
          <p>Professional Car  Care Services <br /> Is Here</p>
        </div>
        </div>
      </div>
  );
};

export default Adminpanel;
