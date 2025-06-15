// import React, { useState } from "react";
// import GarageService from "../Services/GarageService";

// let AddGarageService=()=>{
//      let [msg,setMsg]=useState("");
//     let[garageservice,setGarageService]=useState({
//         servicetype:"",
//         svcost:"",
//         tid:""
//     });

//     let uniHandler=(e)=>{
//        setGarageService(garageservice=>{
//         return{...garageservice,[e.target.name]:e.target.value}
//        });
//     }

//     let saveGarageService=(e)=>
//     {
//         e.preventDefault();
//         let promise=GarageService.addGarageService(garageservice);
//         promise.then((res)=>{
//             setMsg(res.data);
//         }).catch((res)=>{
//             setMsg(res.data);
//         }); 
//     };
 
//     return(
//     <>
//     <div className="serviceform">
//     <center>
//      <h1>Add Garage Service Form</h1><br/><br/>
//     <input type="text" name="servicetype" value={garageservice.servicetype} placeholder="Enter Service Type"  onChange={(e)=>uniHandler(e)}/><br/><br/>
//     <input type="text" name="svcost" value={garageservice.svcost}  placeholder="Enter Service cost" onChange={(e)=>uniHandler(e)} /><br/><br/>
//     <input type="number" name="tid" value={garageservice.tid}  placeholder="Enter Technician Id" onChange={(e)=>uniHandler(e)} /><br/><br/>
//     <input type="Submit" name="subservice" value="Add Service" onClick={saveGarageService}/><br/><br/>
//     {msg}
//     </center>
   
//     </div>
//     </>);
// }
// export default AddGarageService;


import React, { useState, useEffect } from "react";
import GarageService from "../Services/GarageService";
import TechnicianService from "../Services/TechnicianService";
import Footer from "./Footer";

let AddGarageService = () => {
    let [msg, setMsg] = useState("");
    let [technicians, setTechnicians] = useState([]);

    let [garageservice, setGarageService] = useState({
        servicetype: "",
        svcost: "",
        tid: ""
    });

    // Fetch technician list from backend on mount
    useEffect(() => {
        TechnicianService.viewTechnician()
            .then((res) => {
                setTechnicians(res.data);
            })
            .catch((err) => {
                console.error("Error fetching technicians:", err);
            });
    }, []);

    let uniHandler = (e) => {
        setGarageService((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    let saveGarageService = (e) => {
        e.preventDefault();
        GarageService.addGarageService(garageservice)
            .then((res) => setMsg(res.data))
            .catch((err) => setMsg("Error adding service."));
    };

    return (
        <>
            <div className="serviceform">
                <center>
                    <h1>Add Garage Service Form</h1><br /><br />
                    <input
                        type="text"
                        name="servicetype"
                        value={garageservice.servicetype}
                        placeholder="Enter Service Type"
                        onChange={uniHandler}
                    /><br /><br />
                    <input
                        type="text"
                        name="svcost"
                        value={garageservice.svcost}
                        placeholder="Enter Service cost"
                        onChange={uniHandler}
                    /><br /><br />
                    <select
                        name="tid"
                        value={garageservice.tid}
                        onChange={uniHandler}
                    >
                        <option value="">Select Technician</option>
                        {technicians.map((tech) => (
                            <option key={tech.tid} value={tech.tid}>
                                {tech.tname} (ID: {tech.tid})
                            </option>
                        ))}
                    </select><br /><br />
                    <input
                        type="submit"
                        name="subservice"
                        value="Add Service"
                        onClick={saveGarageService}
                    /><br /><br />
                    {msg}
                </center>
            </div>
            <br/><br/><br/><br/><br/>
            <Footer />
        </>
        
    );
};

export default AddGarageService;


