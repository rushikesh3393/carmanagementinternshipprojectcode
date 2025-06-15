import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppointmentService from "../Services/AppointmentService";


let BookingApp = () => {
  let [msg, setMsg] = useState("");
  let [bookedSlots, setBookedSlots] = useState({});
  let [appointment, setAppointment] = useState({
    apid: "",
    cname: "",
    adate: "",
    atime: "",
    vnumber: "",
    uid:""
  });

  useEffect(() => {
    const savedSlots = localStorage.getItem("bookedSlots");
    if (savedSlots) {
      setBookedSlots(JSON.parse(savedSlots));
    }
  }, []);

  let handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({
      ...prev,[name]: value,
    }));
  };

  let saveAppointment = (e) => {
    e.preventDefault();

    const { adate, atime } = appointment;
    if (!adate || !atime) {
      setMsg("Please select date and time.");
      return;
    }

    const disabled = bookedSlots[adate]?.includes(atime);
    if (disabled) {
      setMsg("This time slot is already booked.");
      return;
    }

    AppointmentService.bookAppointment(appointment)
      .then((res) => 
        {
        if (res.data && res.data.apid) 
          {
          const updated = { ...bookedSlots };
          if (!updated[adate]) {
            updated[adate] = [];
          }
          updated[adate].push(atime);

          localStorage.setItem("bookedSlots", JSON.stringify(updated));
          setBookedSlots(updated);

          setMsg("Appointment Booked Successfully!");
          alert(`Your booking is confirmed. Booking ID: ${res.data.apid}`);

          setAppointment({
            apid: res.data.apid,
            cname: appointment.cname,
            adate: appointment.adate,
            atime: appointment.atime,
            vnumber: appointment.vnumber,
            uid:appointment.uid
          });
        } 
        else 
        {
          setMsg("Booking ID not received. Something went wrong.");
        }
      })
      .catch((err) => {
        console.error(err);
        setMsg("Something went wrong while booking.");
      });
  };

  const timeSlots = [
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "01.00 PM",
    "02.00 PM",
    "03.00 PM",
    "04.00 PM",
    "05.00 PM",
    "06.00 PM",
  ];

  const disabledTimes = bookedSlots[appointment.adate] || [];

  return (
    <div className="book">
      <form>
        <center>
          <br /><br />
          <h1>Booking Form</h1>
          <br />
          <input type="text" name="cname" value={appointment.cname} onChange={handleChange}placeholder="Customer Name"/>
          <br /><br /><br />
          <input type="date" name="adate" value={appointment.adate} onChange={handleChange}/>
          <br /><br /><br />
          <select name="atime" value={appointment.atime} onChange={handleChange}>
            <option value="">-- Select Time --</option>
            {timeSlots.map((time) => (
              <option key={time} value={time} disabled={disabledTimes.includes(time)}>
                {time}
              </option>
            ))}
          </select>
          <br /><br /><br />
          <input type="text" name="vnumber" value={appointment.vnumber} onChange={handleChange} placeholder="Vehicle Number (MH10 JK 8998)" />
          <br /><br /><br />
          <input type="number" name="uid" value={appointment.uid} onChange={handleChange} placeholder="Enter Uid"/>
          <br /><br /><br />
          <input type="submit" name="submit" value="Submit" onClick={saveAppointment} />
          <br /><br />
          {msg && (
            <div>
              <strong>{msg}</strong>
            </div>
          )}
        </center>
      </form>
      
    </div>
    
  );
};

export default BookingApp;





