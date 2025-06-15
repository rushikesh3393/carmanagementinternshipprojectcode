import React, { useState } from "react";
import UserService from "../Services/UserService";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

let Registration = () => {

    let navigate = useNavigate();
    let [user, SetUser] = useState({
        uname: "",
        email: "",
        contact: "",
        address: "",
        password: ""
    });

    let [msg, setMsg] = useState("");

    let uniHandler = (e) => SetUser({ ...user, [e.target.name]: e.target.value });

    let saveuser = (e) => {
        e.preventDefault();
        UserService.createUser(user)
            .then((res) => {
                
                setMsg("User registered successfully!")
                navigate('/login')
            } )
            .catch((err) => setMsg("There is Some error"));
    };

    return (
        <>

         <div className="parentregister">
         <div className="registerback">
            <form>
                <div className="registerapp">
                    <h1>Registration Form</h1>
                    <br />
                    <input type="text" name="uname" value={user.uname} placeholder="Enter Your Name" onChange={uniHandler} /><br /><br />
                    <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={uniHandler} /><br /><br />
                    <input type="text" name="contact" value={user.contact} placeholder="Enter Your Contact" onChange={uniHandler} /><br /><br />
                    <input type="text" name="address" value={user.address} placeholder="Enter Your Address" onChange={uniHandler} /><br /><br />
                    <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={uniHandler} /><br /><br />
                    <input type="submit" name="sb" value="Register" onClick={saveuser} />
                    <br/>
                    {msg}
                </div>
            </form>
            </div>
            </div>
        </>
    );
};

export default Registration;
