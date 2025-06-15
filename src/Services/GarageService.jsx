import React from "react";
import axios from "axios";

let addGarage="http://localhost:8080/addGarageService"
let viewGarage="http://localhost:8080/getAllServicesList"
let deleteGarage="http://localhost:8080/deleteService"
let searchGarage="http://localhost:8080/searchService"
let updateGarage="http://localhost:8080/updateService"
let customizepattern="http://localhost:8080/searchServicePattern"

class GarageService
{
    addGarageService(garageservice)
    {
        return axios.post(addGarage,garageservice);
    }

    viewGarageService()
    {
        return axios.get(viewGarage);
    }

    DeleteGarageService(svid)
    {
         return axios.delete(deleteGarage+"/"+svid);
    }

    searchGarageService(svid)
    {
        return axios.get(searchGarage+"/"+svid);
    }

    updateGarageService(garageservice)
    {
        return axios.put(updateGarage,garageservice);
    }

    customPattern(patterns)
    {
        return axios.get(customizepattern+"/"+patterns);
    }

}
export default new GarageService();