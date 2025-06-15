import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import GarageService from "../Services/GarageService";
import ViewGarageService from "./ViewGarageService";
import Footer from "./Footer";

let DeleteGarageService=()=>{
    let{svid}=useParams();
    let[msg,setMsg]=useState("");

    useEffect(()=>{
        let promise=GarageService.DeleteGarageService(svid);

        promise.then((res)=>{
            setMsg(res.data);
        }).catch((res)=>{
            setMsg(res.data)
        });
    });

    
    return(
        <>
          <ViewGarageService/>
          <br/><br/><br/><br/><br/>
            <Footer />
        </>
    );
}
export default DeleteGarageService;