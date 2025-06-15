import React, { useState } from "react";
import TechnicianService from "../Services/TechnicianService";
import Footer from "./Footer";

let AddTechnician=()=>{
    let [msg,setMsg]=useState("");
    let[technician,setTechnician]=useState({
                         tname:"",
                         temail:"",
                         tcontact:"",
                         salary:""
                     });
    
    let unihandler=(e)=>{
        setTechnician(technician=>{
            return{...technician,[e.target.name]:e.target.value}
        });

    }
    
    let saveTechnician=(e)=>{
        e.preventDefault();
        let promise=TechnicianService.addTechnician(technician);

        promise.then(
            (res)=>{
                setMsg(res.data);
            }
        ).catch(
            (res)=>{
                setMsg(res.data);
            }
        );
    }
    
    
    return(<>

      <div className="book">
      <br/>
      <h1>Technician Form</h1> <br/><br/>
      <input type="text" name="tname" value={technician.tname} placeholder="Technician Name" onChange={(e)=>unihandler(e)} /> <br/><br/><br/>
      <input type="text" name="temail" value={technician.temail} placeholder="Technician Email" onChange={(e)=>unihandler(e)} /> <br/><br/><br/>
      <input type="text" name="tcontact" value={technician.tcontact} placeholder="Technician Contact" onChange={(e)=>unihandler(e)} /><br/><br/><br/>
      <input type="text" name="salary" value={technician.salary} placeholder="Technician Salary" onChange={(e)=>unihandler(e)} /><br/><br/><br/><br/>
      <input type="Submit" name="sub" onClick={saveTechnician} /><br/>
      {msg}
      </div>
      <br/><br/><br/><br/><br/>
            <Footer />

    </>);
}
export default AddTechnician;