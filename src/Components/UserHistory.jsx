import React, { useState, useEffect } from "react";
import HistoryService from "../Services/HistoryService";

const UserHistory = () => {
  const [uid, setUid] = useState("");
  const [submittedUid, setSubmittedUid] = useState("");
  const [history, setHistory] = useState([]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(10);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (submittedUid.trim().length > 0) {
      setLoading(true);
      setError(null);
      HistoryService.getHistory()
        .then((res) => {
          const filtered = res.data.filter(
            (item) => item.uid.toString() === submittedUid.trim()
          );
          setHistory(filtered);

          const pageCount = Math.ceil(filtered.length / 10);
          const arr = Array.from({ length: pageCount }, (_, i) => i + 1);
          setPages(arr);
        })
        .catch((err) => {
          console.error("Error fetching history:", err);
          setHistory([]);
          setError("Failed to fetch history");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [submittedUid]);

  const handleUidChange = (e) => {
    setUid(e.target.value);
  };

  const handleSearch = () => {
    if (uid.trim()) {
      setSubmittedUid(uid.trim());
      setPrev(0);
      setNext(10);
    }
  };

  const handlePagination = (e) => {
    const page = parseInt(e.target.value);
    setPrev((page - 1) * 10);
    setNext(page * 10);
  };

  return (
    <div className="container mt-4">
      <h2>Search User History</h2>
      <div className="d-flex my-3">
        <input
          type="text"
          className="form-control w-25 me-2"
          placeholder="Enter UID"
          value={uid}
          onChange={handleUidChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {submittedUid && history.length > 0 && (
        <table className="table table-striped border mt-4">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Vehicle Number</th>
              <th>Service Type</th>
              <th>Service Cost</th>
              <th>SparePart Name</th>
              <th>Spare Quantity</th>
              <th>Spare Amount</th>
              <th>Total Amount</th>
              <th>UID</th>
            </tr>
          </thead>
          <tbody>
            {history.slice(prev, next).map((entry, index) => (
              <tr key={index}>
                <td>{entry.cname}</td>
                <td>{entry.vnumber}</td>
                <td>{entry.servicetype}</td>
                <td>{entry.servicecost}</td>
                <td>{entry.sparename}</td>
                <td>{entry.spareqty}</td>
                <td>{entry.spareamt}</td>
                <td>{entry.totalAmount}</td>
                <td>{entry.uid}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="9">
                <div className="d-flex justify-content-center flex-wrap">
                  {pages.map((page) => (
                    <input
                      key={page}
                      type="button"
                      className="btn btn-dark text-white m-1"
                      value={page}
                      onClick={handlePagination}
                    />
                  ))}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      )}

      {submittedUid && history.length === 0 && !loading && !error && (
        <p className="text-danger">No history found for UID: {submittedUid}</p>
      )}
    </div>
  );
};

export default UserHistory;
