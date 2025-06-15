import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../Services/UserService";
import { Link } from "react-router-dom";
import Footer from "./Footer";

let ViewUser = () => {
  let [user, setUser] = useState([]);
  let [search, setSearch] = useState("");
  let [prev, setPrev] = useState(0);
  let [next, setNext] = useState(10);
  let [pages, setPages] = useState([]);

  useEffect(() => {
    if (search.length === 0) {
      let promise = UserService.getUser();
      promise
        .then((res) => {
          setUser(res.data);
          let total = res.data.length;
          let arr = [];
          for (let i = 0; i <(total / 10); i++) 
          {
            arr.push(i + 1);
          }
          setPages(arr);
        }).catch((err) => 
          {
          console.error(err);
          });
    }
  }, [search]);

  let paginate = (e) => {
    let currBtn = parseInt(e.target.value);
    setPrev((currBtn - 1) * 10);
    setNext(currBtn * 10);
  };

  let searchPattern = (e) => {
    let val = e.target.value;
    setSearch(val);
    if (val.length === 0) return;

    let promise = UserService.userPattern(val);
    promise.then((res) => {
      setUser(res.data);
    });
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          id="patternsearch"
          name="unames"
          value={search}
          placeholder="Search"
          onChange={searchPattern}
          className="form-control my-3"
        />

        <table className="table table-striped border m-2 w-100">
          <thead>
            <tr>
              <th>Uid</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Password</th>
              <th>Role</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {user.slice(prev, next).map((e) => (
              <tr key={e.uid}>
                <td>{e.uid}</td>
                <td>{e.uname}</td>
                <td>{e.email}</td>
                <td>{e.contact}</td>
                <td>{e.address}</td>
                <td>{e.password}</td>
                <td>{e.role}</td>
                <td>
                  <Link to={`/deleteUsers/${e.uid}`}><i class="fa-solid fa-trash"></i></Link>
                </td>
                <td>
                  <Link to={`/updateUsers/${e.uid}`}><i class="fa-solid fa-pencil"></i></Link>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="9">
                <div className="d-flex flex-wrap p-4">
                  {pages.map((p) => (
                    <input key={p} type="button" value={p}  className="btn btn-dark color-white m-3" onClick={paginate} />
                  ))}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <br/><br/><br/><br/><br/>
            <Footer />
    </>
  );
};

export default ViewUser;
