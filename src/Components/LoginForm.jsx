import React, { useState } from "react";
import UserService from "../Services/UserService";
import { useNavigate } from "react-router-dom";

let LoginForm = () => {
  var navigate = useNavigate();
  var navigateCust=useNavigate();
  let [msgs, setMsgs] = useState("");
  let [pass, setPass] = useState({
                                   email: "",
                                   password: ""
                                });

  let uniHandlerr = (e) =>
    setPass({
       ...pass,[e.target.name]: e.target.value
    });

    let verify = (e) => {
      e.preventDefault();
    
      UserService.verifyUser(pass)
        .then((res) => 
          {
          let responseMsg = res.data.trim().toLowerCase();
    
          if (responseMsg === "you are logged in successfully...!") {
            setMsgs("You are successfully logged In...!");
            navigate("/verified");
          } 
          else 
          {
            UserService.verifyCustomer(pass)
              .then((res) => {
                let resMsg = res.data.trim().toLowerCase();
    
                if (resMsg === "you are logged in successfully in customer panel...!") {
                  setMsgs("You are logged In Successfully in Customer Panel...!");
                  navigate("/customerPanel");
                } 
                else 
                {
                  setMsgs("Incorrect Password..!");
                }
              })
              .catch((err) => {
                console.error(err);
                setMsgs("Incorrect Password");
              });
          }
        })
        .catch((err) => {
          console.error(err);
          setMsgs("Incorrect Password");
        });
    };
    
    
    

  return (
    <>
    <div className="loginformparent">
      <div className="loginforms">
        <h1>Login Form</h1>
        <br />
        <input type="text" name="email" value={pass.email}  onChange={(e)=>uniHandlerr(e)}  placeholder="Enter Your Email" />
        <br /><br />
        <input type="password" name="password" value={pass.password} onChange={(e)=>uniHandlerr(e)} placeholder="Enter Your Password" />
        <br /><br />
        <input type="submit" value="Login" onClick={(e)=>verify(e)} />
        <br /><br />

        <p>{msgs}</p>
      </div>
      </div>
    </>
  );
};

export default LoginForm;
