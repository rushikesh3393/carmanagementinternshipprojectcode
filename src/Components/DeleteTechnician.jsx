import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TechnicianService from "../Services/TechnicianService";
import ViewTechnician from "./ViewTechnician";

let DeleteTechnician=()=>{
    let{tid}=useParams();
    let[msg,setMsg]=useState("");

    useEffect(()=>{
        let promise=TechnicianService.deleteTechnician(tid);

        promise.then((res)=>{
             setMsg(res.data);
        }).catch((res)=>{
            setMsg(res.data);
        });
    });


    return(<>
      <ViewTechnician/>
    </>);
}
export default DeleteTechnician;