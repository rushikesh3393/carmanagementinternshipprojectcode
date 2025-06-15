import axios from "axios";

let saveUserUrl = "http://localhost:8080/addUser";
let verifyUrl = "http://localhost:8080/loginUser";
let viewUserUrl = "http://localhost:8080/getAllUsers";
let deleteUser="http://localhost:8080/deleteUser";
let searchUser="http://localhost:8080/searchUser";
let updateUser="http://localhost:8080/updateEmployee";
let userPattern="http://localhost:8080/getUserPattern";
let customer="http://localhost:8080/customerLogin";

class UserService {
  static createUser(usermodel) {
    return axios.post(saveUserUrl, usermodel);
  }

  static verifyUser(pass) 
  {
    return axios.post(verifyUrl,pass); 
  }

  static verifyCustomer(pass) 
  {
    return axios.post(customer,pass); 
  }

  static getUser() {
    return axios.get(viewUserUrl);
  }

  static deleteUser(uid)
  {
    return axios.delete(deleteUser+"/"+uid);
  }

  static seachUsers(uid)
  {
    return axios.get(searchUser+"/"+uid);
  }

  static updateUsers(usermodel)
  {
    return axios.put(updateUser,usermodel);
  }

  static userPattern(upattern)
  {
    return axios.get(userPattern+"/"+upattern);
  }
}

export default UserService;
