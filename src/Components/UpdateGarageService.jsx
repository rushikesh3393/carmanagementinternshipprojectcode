import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import GarageService from "../Services/GarageService";

let UpdateGarageService=()=>{

    let{svid}=useParams();
    let [msg,setMsg]=useState("");
    let[count,setCount]=useState(0);

    let[garageservice,setGarageService]=useState({
            servicetype:"",
            svcost:""
        });
    
    let uniHandler=(e)=>{
           setGarageService(garageservice=>{
            return{...garageservice,[e.target.name]:e.target.value}
           });
        }
    
    useEffect(()=>{
        
        if(count==0)
        {
        let promise=GarageService.searchGarageService(svid);

        promise.then((res)=>{
            setGarageService(res.data);
            setCount(1);
        }).catch((res)=>{
            setGarageService(res.data);
        });
    }
    },[count]);

    let updateGarageService=(e)=>
        {
            e.preventDefault();
            let promise=GarageService.updateGarageService(garageservice);
            promise.then((res)=>{
                setMsg(res.data);
            }).catch((res)=>{
                setMsg(res.data);
            }); 
        };

    return(
    <>
           
    <div className="serviceform">
    <center>
     <h1>Update Garage Service Form</h1><br/><br/>
    <input type="text" name="servicetype" value={garageservice.servicetype} placeholder="Enter Service Type"  onChange={(e)=>uniHandler(e)}/><br/><br/>
    <input type="text" name="svcost" value={garageservice.svcost}  placeholder="Enter Service cost" onChange={(e)=>uniHandler(e)} /><br/><br/>
    <input type="Submit" name="subservice" value="Update Service" onClick={updateGarageService}/><br/><br/>
    {msg}
    </center>
   
    </div>
    </>
    );
}
export default UpdateGarageService;