import axios from "axios";
import React from "react";

let viewAppointments="http://localhost:8080/getAppointmentList";
let bookAppointment="http://localhost:8080/getAppointment";
let deleteAppointment="http://localhost:8080/cancelAppointment";
let searchAppointment="http://localhost:8080/searchAppointment";
let updateAppointment="http://localhost:8080/updateAppointment";
let searchPattern="http://localhost:8080/searchPattern";

class AppointmentService
{
    getAppointments()
    {
        return axios.get(viewAppointments);
    }
    bookAppointment(appointment)
    {
        return axios.post(bookAppointment,appointment);
    }
    cancelAppointment(apid)
    {
        return axios.delete(deleteAppointment+"/"+apid);
    }
    searchAppointment(apid)
    {
        return axios.get(searchAppointment+"/"+apid);
    }
    updateAppointment(appointment)
    {
        return axios.put(updateAppointment,appointment);
    }
    getSearchPattern(searchpattern)
    {
        return axios.get(searchPattern+"/"+searchpattern);
    }  
}
export default new AppointmentService();