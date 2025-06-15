import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../Services/UserService";
import ViewUser from "./ViewUser";

let DeleteUser=()=>{

    let{uid}=useParams();
    let[msg,setMsg]=useState("");

    useEffect(()=>{
        let promise=UserService.deleteUser(uid);

        promise.then((res)=>{
            setMsg(res.data);
        }).catch((res)=>{
            setMsg(res.data);
        });

        }
    );

    return(<>
     <ViewUser/>
    </>);
}
export default DeleteUser;