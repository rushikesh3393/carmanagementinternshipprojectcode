import React from "react";
import axios from "axios";

let getHistory="http://localhost:8080/history";

class HistoryService{

     getHistory()
     {
        return axios.get(getHistory);
     }

}
export default new HistoryService();