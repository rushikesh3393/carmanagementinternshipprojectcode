import axios from "axios";

let addReceipt = "http://localhost:8080/generateReceipt";
let viewReceipt="http://localhost:8080/getAllReceipt";
let deleteReceipt="http://localhost:8080/deleteReceipt";
let updateReceipt="http://localhost:8080/updateReceipt";
let searchReceipt="http://localhost:8080/searchReceipt";
let searchrecPattern="http://localhost:8080/receiptPttern";

class GenerateReceiptService 
{
    createReceipt(receipt) {
        return axios.post(addReceipt, receipt);
    }

    getReceipt()
    {
        return axios.get(viewReceipt);
    }

    DeleteReceipt(apid)
    {
        return axios.delete(deleteReceipt+"/"+apid);
    }

    updateReceipts(receipt)
    {
        return axios.put(updateReceipt,receipt);
    }

    searchReceipts(apid)
    {
        return axios.get(searchReceipt+"/"+apid);
    }

    receiptPattern(search)
    {
        return axios.get(searchrecPattern+"/"+search);
    }

}

export default new GenerateReceiptService();