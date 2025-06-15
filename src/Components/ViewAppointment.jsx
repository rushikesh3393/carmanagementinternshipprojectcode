import React,{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentService from "../Services/AppointmentService";
import {Link, useNavigate} from "react-router-dom";
import Footer from "./Footer";
import CancelAppointment from "./CancelAppointment";

let ViewAppointment=()=>{
    
    let[appointment,setAppointment]=useState([]);
    let[searchpattern,setSearchpattern]=useState("");
    let[prev,setPrev]=useState(0);
    let[next,setNext]=useState(10);
    let[pages,setPages]=useState([]);
    let navigate=useNavigate();

    useEffect(()=>{

        if(searchpattern.length==0)
        {
        let promise=AppointmentService.getAppointments();

        promise.then(
            (res)=>{
                setAppointment(res.data);
                let total=res.data.length;
                let arr=[];
                for(let i=0;i<total/10;i++)
                {
                    arr.push(i+1);
                }
                setPages(arr);
            }
        );
        promise.catch(
            (res)=>{
                setAppointment(res.data);
            }
        )
       }
    },[]);


    let apointpaginate=(e)=>{
        let currBtn = parseInt(e.target.value);
        setPrev((currBtn-1)*10);
        setNext((currBtn*10));
    }


    let acceptSearchPattern=(e)=>
        {
            setSearchpattern(e.target.value);
            let promise=AppointmentService.getSearchPattern(searchpattern);
            promise.then(
                (res)=>{
                    setAppointment(res.data);
                }
            );
    };

    let gotoBookAppointment=(e)=>{
        navigate("/bookAppointment")
    }
    
    return(<>

    <div className="container">


     <div className="topview">
        <button className="techButn" onClick={gotoBookAppointment}>Book Appointment</button>
        <input type="text" id="patternsearch" name="p" value={searchpattern} placeholder="Search" onChange={(e)=>acceptSearchPattern(e)}/>
    </div>
       

      <table className="table table-striped mt-3 border">
          <thead>
            <tr>
                <th>Apid</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Vehicle Number</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>

          </thead>
          <tbody>
            {appointment.slice(prev,next).map((e)=><tr>
                <td>{e.apid}</td>
                <td>{e.cname}</td>
                <td>{e.adate}</td>
                <td>{e.atime}</td>
                <td>{e.vnumber}</td>
                <td> <Link to={`/cancelAppointment/${e.apid}`}><i class="fa-solid fa-trash"></i></Link> </td>
                <td><Link to={`/updateAppointment/${e.apid}`}><i class="fa-solid fa-pencil"></i></Link></td>
             </tr>)}
           </tbody>
           <tfoot>
            <tr>
                <td colSpan="3">
                    <div className="d-flex flex-wrap p-4">
                       {pages.map((p) => (
                          <input key={p} type="button" value={p}  className="btn btn-dark color-white m-3" onClick={apointpaginate} />
                    ))}
                    </div>
                </td>
            </tr>
           </tfoot>
      </table>
    </div>
    <br/><br/><br/><br/><br/>
            <Footer />
    </>);
}
export default ViewAppointment;