import React, { useEffect, useState } from "react";
import SparePartService from "../Services/SparePartService";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

let ViewSparePart=()=>{
    let[sparepart,setSparepart]=useState([]);
    let[search,setSearch]=useState("");
    let navigate=useNavigate();
    let[prev,setPrev]=useState(0);
    let[next,setNext]=useState(10);
    let[pages,setpages]=useState([]);

    useEffect(()=>{

        if(search.length==0)
        {
        let promise=SparePartService.getSparePart();
        promise.then((res)=>{
            setSparepart(res.data);
            let total=res.data.length;
            let arr=[];
            for(let i=0;i<total/10;i++)
            {
                arr.push(i+1);
            }
            setpages(arr);
        }).catch((res)=>{
            setSparepart(res.data);
        });
    }
    },[]);

    let sparePginate=(e)=>{
        let curbtn=parseInt(e.target.value);
        setPrev((curbtn-1)*10);
        setNext(curbtn*10);
    }

    let getSparePattern=(e)=>{

        setSearch(e.target.value);
        let promise=SparePartService.searchPattern(search);
        promise.then((res)=>{
            setSparepart(res.data);
        });
    }

    let gotoAddSpareParts=()=>{
          navigate("/addSpareparts");
    }
    let del
    return(<>

      <div className="container">

      <div className="topview">
        <button className="techButn" onClick={gotoAddSpareParts}>Add SpareParts</button>
        <input type="text" id="patternsearch" name="spattern" value={search} placeholder="Search" onChange={(e)=>getSparePattern(e)}/>
      </div>
      
     
        <table className="table table-striped text-center border">
           <thead>
            <tr>
                <th>SpId</th>
                <th>SparePart Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
           </thead>
           <tbody>
            {
            sparepart.slice(prev,next).map( (e)=><tr>
                    <td>{e.spid}</td>
                    <td>{e.spname}</td>
                    <td>{e.spprice}</td>
                    <td>{e.spqty}</td>
                    <td><Link to={`/deleteSpareparts/${e.spid}`}><i class="fa-solid fa-trash"></i></Link></td>
                    <td><Link to={`/updateSpareparts/${e.spid}`}><i class="fa-solid fa-pencil"></i></Link></td>
                </tr>
             )
           }
           </tbody>
           <tfoot>
            <tr>
                <td>
                    <div className="spp">
                        {
                            pages.map((f)=><input type="button" className="btn btn-dark color-white m-3" value={f} onClick={sparePginate}/>)
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
export default ViewSparePart;