import React from "react";
import axios from "axios";

let addSparePart="http://localhost:8080/addSparePart";
let viewSparePart="http://localhost:8080/getAllSparePart";
let deleteSparePart="http://localhost:8080/deleteSparePart";
let searchSparePart="http://localhost:8080/getSparePart";
let updateSparePart="http://localhost:8080/updateSparePart";
let patternSparePart="http://localhost:8080/sparePartPattern";

class SparePartService
{
    AddSparePart(sparepart)
    {
        return axios.post(addSparePart,sparepart);
    }

    getSparePart()
    {
        return axios.get(viewSparePart);
    }

    DeleteSparePart(spid)
    {
        return axios.delete(deleteSparePart+"/"+spid);
    }

    searchSparePart(spid)
    {
        return axios.get(searchSparePart+"/"+spid);
    }

    updateSparePart(sparepart)
    {
        return axios.put(updateSparePart,sparepart);
    }

    searchPattern(spattern)
    {
        return axios.get(patternSparePart+"/"+spattern);
    }

}
export default new SparePartService();