// import React, { useState, useEffect } from "react";
// import GenerateReceiptService from "../Services/GenerateReceiptService";
// import SparePartService from "../Services/SparePartService";
// import GarageService from "../Services/GarageService";

// const GenerateReceipt = () => {
//     const [msg, setMsg] = useState("");
//     const [receipt, setReceipt] = useState({
//         apid: "",
//         servicetype: "",
//         sparename: "",
//         spareqty: ""
//     });

//     const [serviceTypes, setServiceTypes] = useState([]);
//     const [spareParts, setSpareParts] = useState([]);

//     useEffect(() => {
//         GarageService.viewGarageService()
//             .then(res => {
//                 const services = res.data.map(service => service.servicetype); 
//                 setServiceTypes(services);
//             })
//             .catch(err => {
//                 console.error("Error fetching service types", err);
//                 setServiceTypes([]);
//             });

//         SparePartService.getSparePart()
//             .then(res => {
//                 const spares = res.data.map(spare => spare.spname); 
//                 setSpareParts(spares);
//             })
//             .catch(err => {
//                 console.error("Error fetching spare parts", err);
//                 setSpareParts([]);
//             });
//     }, []);

//     const handleChange = (e) => {
//         setReceipt({ ...receipt, [e.target.name]: e.target.value });
//     };

//     const saveReceipt = (e) => {
//         e.preventDefault();

//         if (!receipt.apid || !receipt.servicetype || !receipt.sparename || !receipt.spareqty) {
//             setMsg("Please fill in all fields.");
//             return;
//         }

//         GenerateReceiptService.createReceipt(receipt)
//             .then(() => setMsg("Receipt generated successfully!"))
//             .catch(() => setMsg("Error generating receipt!"));
//     };

//     return (
//         <div className="receipt">
//             <center>
//                 <h1>Generate Receipt</h1><br />

//                 <input type="text" name="apid" value={receipt.apid} placeholder="Enter Appointment ID" onChange={handleChange} /><br /><br />

//                 <select name="servicetype" value={receipt.servicetype} onChange={handleChange}>
//                     <option value="" disabled>Select Service Type</option>
//                     {serviceTypes.map((type, index) => (
//                         <option key={index} value={type}>{type}</option>
//                     ))}
//                 </select><br /><br />

//                 <select name="sparename" value={receipt.sparename} onChange={handleChange}>
//                     <option value="" disabled>Select Spare Part</option>
//                     {spareParts.map((part, index) => (
//                         <option key={index} value={part}>{part}</option>
//                     ))}
//                 </select><br /><br />

//                 <input type="number" name="spareqty" value={receipt.spareqty} placeholder="Spare Part Quantity" onChange={handleChange}/><br /><br /><br />

//                 <button onClick={saveReceipt}>Generate Receipt</button><br /><br />
//                 <span>{msg}</span>
//             </center>
//         </div>
//     );
// };

// export default GenerateReceipt;


// GenerateReceipt.jsx
// import React, { useState, useEffect } from "react";
// import GenerateReceiptService from "../Services/GenerateReceiptService";
// import SparePartService from "../Services/SparePartService";
// import GarageService from "../Services/GarageService";

// const GenerateReceipt = () => {
//     const [msg, setMsg] = useState("");
//     const [receipt, setReceipt] = useState({
//         apid: "",
//         servicetype: "",
//         sparename: "",
//         spareqty: ""
//     });
//     const [serviceTypes, setServiceTypes] = useState([]);
//     const [spareParts, setSpareParts] = useState([]);

//     useEffect(() => {
//         const fetchServiceTypes = async () => {
//             try {
//                 const response = await GarageService.viewGarageService();
//                 const services = response.data.map(service => service.servicetype);
//                 setServiceTypes(services);
//             } catch (error) {
//                 console.error("Error fetching service types:", error);
//                 setServiceTypes([]);
//             }
//         };

//         const fetchSpareParts = async () => {
//             try {
//                 const response = await SparePartService.getSparePart();
//                 const spares = response.data.map(spare => spare.spname);
//                 setSpareParts(spares);
//             } catch (error) {
//                 console.error("Error fetching spare parts:", error);
//                 setSpareParts([]);
//             }
//         };

//         fetchServiceTypes();
//         fetchSpareParts();
//     }, []);

//     const handleChange = (e) => {
//         setReceipt({ ...receipt, [e.target.name]: e.target.value });
//     };

//     const saveReceipt = async (e) => {
//         e.preventDefault();

//         if (!receipt.apid || !receipt.servicetype || !receipt.sparename || !receipt.spareqty) {
//             setMsg("Please fill in all fields.");
//             return;
//         }

//         try {
//             const response = await GenerateReceiptService.createReceipt(receipt);
//             setMsg("Receipt generated successfully!");
//         } catch (error) {
//             setMsg("Error generating receipt!");
//         }
//     };

//     return (
//         <div className="receipt">
//             <center>
//                 <h1>Generate Receipt</h1><br />

//                 <input 
//                     type="text" 
//                     name="apid" 
//                     value={receipt.apid} 
//                     placeholder="Enter Appointment ID" 
//                     onChange={handleChange}
//                 /><br /><br />

//                 <select 
//                     name="servicetype" 
//                     value={receipt.servicetype} 
//                     onChange={handleChange}
//                 >
//                     <option value="" disabled>Select Service Type</option>
//                     {serviceTypes.map((type, index) => (
//                         <option key={index} value={type}>{type}</option>
//                     ))}
//                 </select><br /><br />

//                 <select 
//                     name="sparename" 
//                     value={receipt.sparename} 
//                     onChange={handleChange}
//                 >
//                     <option value="" disabled>Select Spare Part</option>
//                     {spareParts.map((part, index) => (
//                         <option key={index} value={part}>{part}</option>
//                     ))}
//                 </select><br /><br />

//                 <input 
//                     type="number" 
//                     name="spareqty" 
//                     value={receipt.spareqty} 
//                     placeholder="Spare Part Quantity" 
//                     onChange={handleChange}
//                 /><br /><br /><br />

//                 <button onClick={saveReceipt}>Generate Receipt</button><br /><br />
//                 <span>{msg}</span>
//             </center>
//         </div>
//     );
// };

// export default GenerateReceipt;

import React, { useState, useEffect } from "react";
import GenerateReceiptService from "../Services/GenerateReceiptService";
import SparePartService from "../Services/SparePartService";
import GarageService from "../Services/GarageService";


const GenerateReceipt = () => {
    const [msg, setMsg] = useState("");
    const [receipt, setReceipt] = useState({
        apid: "",
        servicetype: "",
        sparename: "",
        spareqty: ""
    });

    const [serviceTypes, setServiceTypes] = useState([]);
    const [spareParts, setSpareParts] = useState([]);

    useEffect(() => {
        GarageService.viewGarageService()
            .then(res => {
                const services = res.data.map(service => service.servicetype); 
                setServiceTypes(services);
            })
            .catch(err => {
                console.error("Error fetching service types", err);
                setServiceTypes([]);
            });

        SparePartService.getSparePart()
            .then(res => {
                const spares = res.data.map(spare => spare.spname); 
                setSpareParts(spares);
            })
            .catch(err => {
                console.error("Error fetching spare parts", err);
                setSpareParts([]);
            });
    }, []);

    const handleChange = (e) => {
        setReceipt({ ...receipt, [e.target.name]: e.target.value });
    };

    const saveReceipt = (e) => {
        e.preventDefault();

        if (!receipt.apid || !receipt.servicetype || !receipt.sparename || !receipt.spareqty) {
            setMsg("Please fill in all fields.");
            return;
        }

        GenerateReceiptService.createReceipt(receipt)
            .then(() => setMsg("Receipt generated successfully!"))
            .catch(() => setMsg("Error generating receipt!"));
    };

    return (
        <div className="receipt">
            <center>
                <h1>Generate Receipt</h1><br />

                <input type="text" name="apid" value={receipt.apid} placeholder="Enter Appointment ID" onChange={handleChange} /><br /><br />

                <select name="servicetype" value={receipt.servicetype} onChange={handleChange}>
                    <option value="" disabled>Select Service Type</option>
                    {serviceTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select><br /><br />

                <select name="sparename" value={receipt.sparename} onChange={handleChange}>
                    <option value="" disabled>Select Spare Part</option>
                    {spareParts.map((part, index) => (
                        <option key={index} value={part}>{part}</option>
                    ))}
                </select><br /><br />

                <input type="number" name="spareqty" value={receipt.spareqty} placeholder="Spare Part Quantity" onChange={handleChange}/><br /><br /><br />

                <button onClick={saveReceipt}>Generate Receipt</button><br /><br />
                <span>{msg}</span>
            </center>
            
    </div>
        
    );
};

export default GenerateReceipt;