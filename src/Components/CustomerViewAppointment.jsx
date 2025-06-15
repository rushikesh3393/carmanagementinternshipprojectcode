import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentService from "../Services/AppointmentService";
import Footer from "./Footer";

let CustomerViewAppointment = () => {
  let { apid } = useParams();

  let [appointment, setAppointment] = useState({
    cname: "",
    adate: "",
    atime: "",
    vnumber: ""
  });

  let [searchId, setSearchId] = useState(apid);

  let handleChange = (e) => {
    setAppointment(appointment => {
      return { ...appointment, [e.target.name]: e.target.value }
    });
  };

  let handleSearch = () => {
    if (searchId) {
      AppointmentService.searchAppointment(searchId).then((res) => {
        setAppointment(res.data);
      }).catch((err) => {
        console.error(err);
        alert("Appointment not found!");
      });
    } else {
      alert("Please enter a valid Appointment ID");
    }
  };

  return (
    <>
      
      <div className="book">
        <br/>
      <input type="number" name="s" value={searchId} placeholder="Enter your Apid" onChange={(e) => setSearchId(e.target.value)} />
      <br /><br />
      <button type="button" onClick={handleSearch}>Search</button>
      <br /><br />
        <form>
          <center>
            <h1>Appointment</h1>
            <br /><br />

            <label htmlFor="cname">Customer name</label><br />
            <input type="text" name="cname" value={appointment.cname}  onChange={handleChange}  placeholder="Customer Name"  readOnly/> <br /><br />

            <label htmlFor="adate">Appointment Date</label><br />
            <input type="date" name="adate" value={appointment.adate} onChange={handleChange} readOnly /> <br /><br />

            <label htmlFor="atime">Appointment Time</label><br />
            <input type="text" name="atime" value={appointment.atime} onChange={handleChange} placeholder="Time" readOnly /> <br /><br />

            <label htmlFor="vnumber">Vehicle Number</label><br />
            <input type="text" name="vnumber" value={appointment.vnumber} onChange={handleChange}  placeholder="Vehicle Number (MH10 JK 8998)" readOnly/> <br /><br />
            <br /><br />
          </center>
        </form>
        <br/><br/><br/><br/><br/>
            
      </div>
      <br/><br/><br/><br/>
      <Footer />
    </>
  );
};

export default CustomerViewAppointment;
