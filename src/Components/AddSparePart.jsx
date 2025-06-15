import React, { useState } from "react";
import SparePartService from "../Services/SparePartService";
import Footer from "./Footer";

let AddSparePart=()=>{

    let[msg,setMsg]=useState("");
    let[sparepart,setSparepart]=useState({
             spname:"",
             spprice:"",
             spqty:"",
           });

    let uniHandler=(e)=>{
        setSparepart(sparepart=>{
            return{...sparepart,[e.target.name]:e.target.value}
        }) 
    }

    let saveSparePart=(e)=>{
        e.preventDefault();
        let promise=SparePartService.AddSparePart(sparepart);
        promise.then((res)=>{
            console.log(res.data);
            setMsg(res.data);
        }).catch((res)=>{
            setMsg(res.data);
        });
    }
    
    return(
        <>
        <div className="spareparts">
         <h1>Spare Part</h1> <br/><br/>
        <input type="text" name="spname" value={sparepart.spname} placeholder="Spare Part Name" onChange={(e)=>uniHandler(e)} /><br/><br/>
        <input type="text" name="spprice" value={sparepart.spprice} placeholder="Spare Part Price" onChange={(e)=>uniHandler(e)} /><br/><br/>
        <input type="text" name="spqty" value={sparepart.spqty} placeholder="Spare Part Quantity" onChange={(e)=>uniHandler(e)}/><br/><br/>
        <input type="submit" value="Add SparePart" onClick={(e)=>saveSparePart(e)} /><br/>
        {msg}
        </div>
        <br/><br/><br/><br/><br/>
            <Footer />
        </>
    );
}
export default AddSparePart;