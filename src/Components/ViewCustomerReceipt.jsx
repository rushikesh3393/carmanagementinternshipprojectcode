import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GenerateReceiptService from "../Services/GenerateReceiptService";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Footer from "./Footer";

let ViewCustomerReceipt = () => {
  let [apid, setApid] = useState("");
  let [receipt, setReceipt] = useState(null);
  let [msg, setMsg] = useState("");
  const receiptRef = useRef(); 
  let handleApidChange = (e) => {
    setApid(e.target.value);
  };

  let fetchReceipt = () => {
    if (apid.trim() !== "") {
      GenerateReceiptService.searchReceipts(apid)
        .then((res) => {
          setReceipt(res.data);
          setMsg("");
        })
        .catch((err) => {
          setReceipt(null);
          setMsg("Receipt not found for given Appointment ID.");
        });
    } else {
      setMsg("Please enter a valid Appointment ID.");
    }
  };

 
  let downloadPDF = () => 
    {
    const input = receiptRef.current;
    html2canvas(input, { scale: 2 }) .then((canvas) => 
        {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`RMOTORS Invoice_${receipt.apid}.pdf`);
      }).catch((error) => console.error("Error generating PDF", error));
  };

  return (
    <>
      <div className="receiptsupdt">
        <h1>View Receipt</h1>
        <br />
        <input type="text" name="apid" value={apid}  placeholder="Enter Appointment ID" onChange={handleApidChange}/>
        <br /><br />

        <input type="submit" value="View Receipt" onClick={fetchReceipt} className="btn btn-primary" />
        <br /><br />

        {msg}

        <div className="customerReceipt" >
        {receipt && (
          <>
            <div className="receipt-details p-4" style={{ border: "1px solid black" }} ref={receiptRef}>

              <br/>
              <h1>RMOTORS Garage Services</h1><br/>
              <hr/>
              <br/><b>Address:</b><h6>Herwade colony behind shshu garden Jaysingpur </h6> <b>Contact:</b><h6>+91-7666138655</h6> <br/>
              <h4 style={{ textAlign: "center" }}>Receipt</h4>
              <hr /><br/>
              <table style={{ width: "100%", marginBottom: "20px" }}>
                <tbody>
                  <tr>
                    <td>
                      <strong>Appointment ID:</strong>
                    </td>
                    <td>{receipt.apid}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Customer Name:</strong>
                    </td>
                    <td>{receipt.cname}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Vehicle Number:</strong>
                    </td>
                    <td>{receipt.vnumber}</td>
                  </tr>
                </tbody>
              </table>
              <hr/>
              <br/>
              <h5>Service Details</h5>
              <table style={{ width: "100%", marginBottom: "20px" }}  border="1" cellPadding="8" cellSpacing="0">

                <thead style={{ backgroundColor: "#f2f2f2" }}>
                  <tr>
                    <th>Service Type</th>
                    <th>Service Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{receipt.servicetype}</td>
                    <td>{receipt.servicePrice}</td>
                  </tr>
                </tbody>
              </table>
              <br/>

              <h5>Spare Parts Details</h5>
              <table style={{ width: "100%" }} border="1" cellPadding="8" cellSpacing="0">
                <thead style={{ backgroundColor: "#f2f2f2" }}>
                  <tr>
                    <th>Spare Part Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{receipt.sparename}</td>
                    <td>{receipt.spareqty}</td>
                    <td>{receipt.spareamt}</td>
                  </tr>
                </tbody>
              </table>
            <br/><br/><hr />

              <h3 style={{ textAlign: "right" }}><br/><strong>Total Amount: ₹{receipt.totalAmount}</strong></h3>
            </div>
            <br />

            <button onClick={downloadPDF} className="btn btn-success">
              Download Invoice
            </button>
          </>
        )}

        </div>
      </div>
      <br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/>
            <Footer />
    </>
  );
};

export default ViewCustomerReceipt;
