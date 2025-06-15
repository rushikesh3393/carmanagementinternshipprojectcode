import React from "react";
import axios from "axios";

let addTech="http://localhost:8080/addTechnician";
let viewTech="http://localhost:8080/techicianList";
let deleteTech="http://localhost:8080/deleteTechnician";
let searchTech="http://localhost:8080/getTechnician";
let updateTech="http://localhost:8080/updateTechnician";
let patternTech="http://localhost:8080/getTechSearchpattern";



class TechnicianService
{

    addTechnician(technician)
    {
        return axios.post(addTech,technician);
    }

    viewTechnician()
    {
        return axios.get(viewTech);
    }

    deleteTechnician(tid)
    {
        return axios.delete(deleteTech+"/"+tid);
    }

    searchTechnician(tid)
    {
        return axios.get(searchTech+"/"+tid);
    }

    updateTechnician(technician)
    {
        return axios.put(updateTech,technician);
    }

    patternTechnician(pattern)
    {
        return axios.get(patternTech+"/"+pattern);
    }


}
export default new TechnicianService();