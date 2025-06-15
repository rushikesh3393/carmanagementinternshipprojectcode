import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../Services/UserService";

let UpdateUser=()=>{
    let{uid}=useParams();
    let [msg, setMsg] = useState("");
    let[count,setCount]=useState(0);

    let [user, SetUser] = useState({
        uname: "",
        email: "",
        contact: "",
        address: "",
        password: ""
    });

    let uniHandler = (e) => SetUser({ ...user, [e.target.name]: e.target.value });

    useEffect(()=>{

        if(count==0)
        {
        let promise=UserService.seachUsers(uid);
        promise.then((res)=>{
            SetUser(res.data);
            setCount(1);
        }).catch((res)=>{
            SetUser(res.data);
        })
    }
    },[count]);

    let updateuser = (e) => {
        e.preventDefault();
        UserService.updateUsers(user)
            .then((res) => {
                
                setMsg(res.data);
               
            } )
            .catch((err) => setMsg(res.data));
    };


    return(<>
      <form>
                <div className="registerapp">
                    <h1>Update User Form</h1>
                    <br />
                    <input type="text" name="uname" value={user.uname} placeholder="Enter Your Name" onChange={(e)=>uniHandler(e)} /><br /><br />
                    <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={(e)=>uniHandler(e)} /><br /><br />
                    <input type="text" name="contact" value={user.contact} placeholder="Enter Your Contact" onChange={(e)=>uniHandler(e)} /><br /><br />
                    <input type="text" name="address" value={user.address} placeholder="Enter Your Address" onChange={(e)=>uniHandler(e)} /><br /><br />
                    <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={(e)=>uniHandler(e)} /><br /><br />
                    <input type="submit" name="sb" value="Update" onClick={(e)=>updateuser(e)} />
                    <br/>
                    {msg}
                </div>
            </form>
    
    </>);
}
export default UpdateUser;