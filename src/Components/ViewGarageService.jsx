import React, { useEffect, useState } from "react";
import GarageService from "../Services/GarageService";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

let ViewGarageService=()=>{
    let[garageservice,setGarageService]=useState([]);
    let[search,setSearch]=useState("");
    let navigate=useNavigate();
    let [prev,setPrev]=useState(0);
    let[next,setNext]=useState(10);
    let[pages,setPages]=useState([]);

    useEffect(() => {
        if (search.length === 0) {
            GarageService.viewGarageService()
                .then((res) => {
                    setGarageService(res.data);
                    let total=res.data.length;
                    let arr=[];
                    for(let i=0;i<total/10;i++)
                    {
                       arr.push(i+1);
                    }
                    setPages(arr);
                })
                .catch((res) => {
                    
                    setGarageService(res.data);
                });
        }
    },[]); 

    let garagePaginate=(e)=>{
        let cubtn=parseInt(e.target.value);
        setPrev((cubtn-1)*10);
        setNext(cubtn*10);
    }
    
    let acceptSearch=(e)=>{
        setSearch(e.target.value);
        let promise=GarageService.customPattern(search);

            promise.then((res)=>{
                setGarageService(res.data);
            });
    }
    
    let gotoGarageService=(e)=>{
        navigate("/addServices");
    }
   
    return(<>
    <div className="container">

    <div className="topview">
        <button className="techButn" onClick={gotoGarageService}>Add GarageService</button>
        <input type="text" name="cusearch" id="patternsearch" value={search} placeholder="Search" onChange={(e)=>acceptSearch(e)}/>
    </div>

    
    <table className="table table-striped border p-5">
      <thead>
        <tr>
            <th>SvId</th>
            <th>Service Type</th>
            <th>Service Price</th>
            <th>Technician Id</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
      </thead>
      <tbody>
            {garageservice.slice(prev,next).map((e)=><tr>
                        <td>{e.svid}</td>
                        <td>{e.servicetype}</td>
                        <td>{e.svcost}</td>
                        <td>{e.tid}</td>
                        <td><Link to={`/deleteServices/${e.svid}`}><i class="fa-solid fa-trash"></i></Link></td>
                        <td><Link to={`/updateServices/${e.svid}`}><i class="fa-solid fa-pencil"></i></Link></td>
                    </tr>
                )
            }
      </tbody>
      <tfoot>
        <tr>
            <td>
                <div className="df">
                    {
                        pages.map((f)=><input type="button" className="btn btn-dark color-white m-3" value={f} onClick={garagePaginate} />)
                    }
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
export default ViewGarageService;