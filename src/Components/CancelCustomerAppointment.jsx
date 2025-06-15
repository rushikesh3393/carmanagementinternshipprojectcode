import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppointmentService from "../Services/AppointmentService";
import Footer from "./Footer";

let CancelCustomerAppointment = () => {
    let { apid } = useParams();
    let [msg, setMSg] = useState("");
    let [searchId, setSearchId] = useState(apid);

    let CancelApp = (e) => {
        let promise = AppointmentService.cancelAppointment(searchId);

        promise.then((res) => {
            setMSg(res.data);
        }).catch((res) => {
            setMSg(res.data);
        });
    };

    return (
        <>
            <div className="updatecust">
                <input 
                    type="number" 
                    name="frg" 
                    value={searchId} 
                    onChange={(e) => setSearchId(e.target.value)} 
                    placeholder="Enter Apid" 
                />
                <br/>
                <br/>
                <input 
                    type="button" 
                    value="Cancel Appointment" 
                    onClick={(e) => CancelApp(e)} 
                />
            </div>
            {msg && <div>{msg}</div>}
            <br/><br/><br/><br/><br/>
            <Footer />
        </>
    );
}

export default CancelCustomerAppointment;
