
import React, { useEffect, useState } from "react";
import GenerateReceiptService from "../Services/GenerateReceiptService";
import { Link } from "react-router-dom";
import Footer from "./Footer";

let ViewReceipt=()=>{

    let[receipt,setReceipt]=useState([]);
    let[search,setSearch]=useState("");
    let[prev,setPrev]=useState(0);
    let[next,setNext]=useState(10);
    let[pages,setPages]=useState([]);


    useEffect(()=>{
        let promise=GenerateReceiptService.getReceipt();
        promise.then((res)=>{
            setReceipt(res.data);
            let total=res.data.length;
            let arr=[];
            for(let i=0;i<total/10;i++)
            {
                arr.push(i+1);
            }
            setPages(arr);
        }).catch((res)=>{
            setReceipt(res.data);
        });
    },[]);

    let getRecPattern=(e)=>{
        setSearch(e.target.value);
        let promise=GenerateReceiptService.receiptPattern(search);
        promise.then((res)=>{
            setReceipt(res.data);
        });

    }

    let RecPaginate=(e)=>{
        let cubtn=parseInt(e.target.value);
        setPrev((cubtn-1)*10);
        setNext(cubtn*10);
    }

    return(<>
      
      <input type="text" name="spatern"  id="patternsearch" value={search} placeholder="Search" onChange={getRecPattern}/>
      <table className="table table-striped border text-center p-5">

        <thead>
            <tr>
                <th>Apid</th>
                <th>Customer Name</th>
                <th>Vehicle Number</th>
                <th>Service Type</th>
                <th>Service Cost</th>
                <th>SparePart Used</th>
                <th>Quantity</th>
                <th>SParePart Price</th>
                <th>Total Amount</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
             {
                receipt.slice(prev,next).map((e)=><tr>
                    <td>{e.apid}</td>
                    <td>{e.cname}</td>
                    <td>{e.vnumber}</td>
                    <td>{e.servicetype}</td>
                    <td>{e.servicePrice}</td>
                    <td>{e.sparename}</td>
                    <td>{e.spareqty}</td>
                    <td>{e.spareamt}</td>
                    <td>{e.totalAmount}</td>
                    <td><Link to={`/deletereceipt/${e.apid}`}><i class="fa-solid fa-trash"></i></Link></td>
                    <td><Link to={`/updatereceipt/${e.apid}`}><i class="fa-solid fa-pencil"></i></Link></td>
                </tr>)
             }
        </tbody>
        <tfoot>
            <tr>
                <td>
                    <div className="vr">
                        {
                            pages.map((f)=><input type="button"  className="btn btn-dark color-white m-3" value={f} onClick={RecPaginate}/>)
                        }
                    </div>
                </td>
            </tr>
        </tfoot>
      </table>
    <br/><br/><br/><br/><br/>
            <Footer />
    </>);
}
export default ViewReceipt;