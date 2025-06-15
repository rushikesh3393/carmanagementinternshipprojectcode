import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import GenerateReceiptService from "../Services/GenerateReceiptService";
import ViewReceipt from "./ViewReceipt";

let DeleteReceipt=()=>{
    let{apid}=useParams();

    let[msg,setMsg]=useState("");

    useEffect(()=>{
        let promise=GenerateReceiptService.DeleteReceipt(apid);
        promise.then((res)=>
        {
            setMsg(res.data);
        }).catch((res)=>
        {
            setMsg(res.data);
        });
    });

    return(<>
           <ViewReceipt/>
    </>);
}
export default DeleteReceipt;