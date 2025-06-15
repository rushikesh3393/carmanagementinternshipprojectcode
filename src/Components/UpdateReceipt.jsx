import React, { useEffect, useState } from "react";
import GenerateReceiptService from "../Services/GenerateReceiptService";
import { useParams } from "react-router-dom";

let UpdateReceipt = () => {

    let {apid} = useParams();
    let [msg, setMsg] = useState("");
    let [count, setCount] = useState(0);
    let [receipt, setReceipt] = useState({
        apid: "",
        servicetype: "",
        sparename: "",
        spareqty: ""
    });

    let uniHandler = (e) => {
        setReceipt({ ...receipt, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (count == 0) {
            let promise = GenerateReceiptService.searchReceipts(apid);
            promise.then((res) => {
                setReceipt(res.data); 
                setCount(1);
            }).catch((err) => {
                console.log("Error fetching receipt", err);  
            });
        }
    }, [count]);

    let updateReceipt = (e) => {
        e.preventDefault();

        GenerateReceiptService.updateReceipts(receipt)
            .then((res) => {
                setMsg("Receipt updated successfully!");
            })
            .catch((err) => {
                setMsg("Error generating receipt!");
            });
    };

    return (
        <>
            <div className="receiptsupdt">
                <br/>
                <h1>Update Receipt</h1>
                <br />
                <input type="text" name="apid" value={receipt.apid} placeholder="Enter Appointment ID" onChange={uniHandler} /><br /><br />
                <input type="text" name="servicetype" value={receipt.servicetype} placeholder="Enter Service type" onChange={uniHandler} /><br /><br />
                <input type="text" name="sparename" value={receipt.sparename} placeholder="Enter Spare Part Name" onChange={uniHandler} /><br /><br />
                <input type="text" name="spareqty" value={receipt.spareqty} placeholder="Spare Part Quantity" onChange={uniHandler} /><br /><br />
                <input type="submit" value="Update" onClick={updateReceipt} /><br /><br />
                {msg}
            </div>
        </>
    );
};

export default UpdateReceipt;
