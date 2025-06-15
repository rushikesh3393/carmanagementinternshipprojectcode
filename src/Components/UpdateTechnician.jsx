import React, { useEffect,useState } from "react";
import TechnicianService from "../Services/TechnicianService";
import { useParams } from "react-router-dom";

let UpdateTechnician=()=>
{
    let{tid}=useParams();
    let[count,setCount]=useState(0);
    let[msg,setMsg]=useState("");
     
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

    useEffect(
        ()=>{

            if(count==0)
            {
            let promise=TechnicianService.searchTechnician(tid);

            promise.then((res)=>{
                setTechnician(res.data);
                setCount(1);

            }).catch((res)=>{
                setTechnician(res.data);
            });
        }
        },[count]
    );

    let updateTechnician=(e)=>{
            e.preventDefault();
            let promise=TechnicianService.updateTechnician(technician);
    
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
      <input type="Submit" name="sub" value="Update Technician" onClick={(e)=>updateTechnician(e)} /><br/>
       {msg}
      </div>
    </>);
}
export default UpdateTechnician;