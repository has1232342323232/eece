import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const ManageCountDown = () => {


  const [allNoticeData, setAllNoticeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countDown")
      .then((res) => res.json())
      .then((data) => {
        console.log("data of all image", data);
        setAllNoticeData(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    if (id) {
      fetch(`http://localhost:5000/countDown/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-custom-pink p-10">
        Manage NCount Down Section 
      </h1>
 
      <br />
      <div className="divider text-2xl">All Count Down List</div>
      <br /> <br />
      {allNoticeData ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>End Date</th>
                <th>End Time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allNoticeData.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data?.title}</td>
                  <td>{data.targetDate}</td>
                  <td>{data.targetTime}</td>
                  
                  <td>
                    {" "}
                    <button
                      className="btn btn-xs bg-custom-pink"
                      onClick={() => handleDelete(data._id)}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
    </div>
  );
};

export default ManageCountDown;
