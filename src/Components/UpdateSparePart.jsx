

import SparePartService from "../Services/SparePartService";
import { useParams } from "react-router-dom";

let UpdateSparePart=()=>{
    let[count,setCount]=useState(0);
    let[msg,setMsg]=useState("");
    let{spid}=useParams();

    let[sparepart,setSparepart]=useState({
                 spname:"",
                 spprice:"",
                 spqty:"",
               });
    
        let uniHandler=(e)=>{
            setSparepart(sparepart=>{
                return{...sparepart,[e.target.name]:e.target.value}
            }) 
        }

        useEffect(
            ()=>{
                if(count==0)
                {
                    let promise=SparePartService.searchSparePart(spid);
                    promise.then((res)=>{
                        setSparepart(res.data);
                        setCount(1);
                    }).catch((res)=>{
                        setSparepart(res.data);
                    });
                }
            },[count]
        );

        let updatespare=(e)=>{
            e.preventDefault();
            let promise=SparePartService.updateSparePart(sparepart);
            promise.then((res)=>{
                setMsg(res.data);
            }).catch((res)=>{
                setMsg(res.data);
            });
        }


    return(<>
    <div className="spareparts">
         <h1>Spare Part</h1> <br/><br/>
        <input type="text" name="spname" value={sparepart.spname} placeholder="Spare Part Name" onChange={(e)=>uniHandler(e)} /><br/><br/>
        <input type="text" name="spprice" value={sparepart.spprice} placeholder="Spare Part Price" onChange={(e)=>uniHandler(e)} /><br/><br/>
        <input type="text" name="spqty" value={sparepart.spqty} placeholder="Spare Part Quantity" onChange={(e)=>uniHandler(e)}/><br/><br/>
        <input type="submit" value="UpdateSparePart" onClick={(e)=>updatespare(e)} /><br/>
        {msg}
    </div>
    
    
    </>);
}
export default UpdateSparePart;