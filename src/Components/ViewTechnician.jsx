import React, { useEffect, useState } from "react";
import TechnicianService from "../Services/TechnicianService";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

let ViewTechnician=()=>{

    let[technician,setTechnician]=useState([]);
    let[search,setSearch]=useState("");
    let navigate=useNavigate();
    let[prev,setPrev]=useState(0);
    let[next,setNext]=useState(10);
    let[pages,setPages]=useState([]);


    useEffect(
        (e)=>{

            if(search.length==0)
            {
            let promise=TechnicianService.viewTechnician();

            promise.then((res)=>{
                setTechnician(res.data);

                let total=res.data.length;
                let arr=[];
                for(let i=0;i<total/10;i++)
                {
                    arr.push(i+1);
                }
                setPages(arr);
            }).catch((res)=>{
                setTechnician(res.data);
            });
        }},[]
    );

    let paginateTech=(e)=>{
        let currbtn=parseInt(e.target.value);
        setPrev((currbtn-1)*10);
        setNext(currbtn*10);

    }

    let getTechPattern=(e)=>{

        setSearch(e.target.value);
        let promise=TechnicianService.patternTechnician(search);

            promise.then((res)=>{
                setTechnician(res.data);
            });

    }

    let goToAddTechnician=(e)=>{
        navigate("/addTechnician");
    }
    return(<>
       <div className="container">

        <div className="topview">
        <button className="techButn" onClick={goToAddTechnician}>Add Technician</button>
        <input type="text" id="patternsearch" name="serchTech" value={search}  placeholder="Search"  onChange={getTechPattern}/>
        </div>
        

        <table className="table table-striped border p-5 mt-5">
            <thead>
              <tr>   
               <th>Tid</th>
               <th>Technician Name</th>
               <th>Technician Email</th>
               <th>Tecnician Contact</th>
               <th>Salary</th>
               <th>Delete</th>
               <th>Update</th>
              </tr>                                                                        
            </thead>
            <tbody>
               {
                technician.slice(prev,next).map((e)=><tr>
                    <td>{e.tid}</td>
                    <td>{e.tname}</td>
                    <td>{e.temail}</td>
                    <td>{e.tcontact}</td>
                    <td>{e.salary}</td>
                    <td><Link to={`/deleteTechnician/${e.tid}`}><i class="fa-solid fa-trash"></i></Link></td>
                    <td><Link to={`/updateTechnician/${e.tid}`}><i class="fa-solid fa-pencil"></i></Link></td>
                </tr>)
               }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="9">
                        <div className="tp">
                        {
                         pages.map((p) => (
                          <input type="button" value={p}  className="btn btn-dark color-white m-3" onClick={paginateTech} />
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
export default ViewTechnician;