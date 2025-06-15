import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SparePartService from "../Services/SparePartService";
import ViewSparePart from "./ViewSparePart";

let DeleteSparePart=()=>{
    let {spid}=useParams();
    let[msg,setMsg]=useState("");

    useEffect(()=>{
        let promise=SparePartService.DeleteSparePart(spid);
        promise.then((res)=>{
            console.log(res.data);
            setMsg(res.data);

        }).catch((res)=>{
            setMsg(res.data);
        });
    });


    return(<>
           <ViewSparePart/>
    </>);
}
export default DeleteSparePart;