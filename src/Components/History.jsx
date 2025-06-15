import React, { useEffect, useState } from "react";
import HistoryService from "../Services/HistoryService";
import Footer from "./Footer";

let History = () => {
  let [history, setHistory] = useState([]);
  let [search, setSearch] = useState("");
  let [prev,setPrev]=useState(0);
  let[next,setNext]=useState(10);
  let[pages,setPages]=useState([]);
  

  useEffect(() => {
    if (search.length === 0) {
      HistoryService.getHistory()
        .then((res) => {
          setHistory(res.data);

          let total=res.data.length;
                    let arr=[];
                    for(let i=0;i<total/10;i++)
                    {
                       arr.push(i+1);
                    }
                    setPages(arr);
        })
        .catch((err) => {
          setHistory([]);
        });
    }
  }, [search]);

  let garagePaginate=(e)=>{
        let cubtn=parseInt(e.target.value);
        setPrev((cubtn-1)*10);
        setNext(cubtn*10);
    }

  return (
    <>
    <div className="hs">
         <h1>History Details</h1>
    </div>
     
      <table className="table table-striped border p-5 m-2">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Vehicle Number</th>
            <th>Service Type</th>
            <th>Service Cost</th>
            <th>SparePart Name</th>
            <th>Spare Quantity</th>
            <th>Spare Amount</th>
            <th>Total Amount</th>
            <th>Uid</th>
          </tr>
        </thead>
        <tbody>
          {history.slice(prev,next).map((e) => (
            <tr>
              <td>{e.cname}</td>
              <td>{e.vnumber}</td>
              <td>{e.servicetype}</td>
              <td>{e.servicecost}</td>
              <td>{e.sparename}</td>
              <td>{e.spareqty}</td>
              <td>{e.spareamt}</td>
              <td>{e.totalAmount}</td>
              <td>{e.uid}</td>
            </tr>
          ))}
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
      <br/><br/><br/><br/><br/>
            <Footer />
    </>
  );
};

export default History;
