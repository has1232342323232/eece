import React, { useContext } from "react";
import "./AdminPage.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Countdown from "../Countdown";
import useAdmin from "../../../../Hooks/useAdmin";
import { AuthContext } from "../../../../Contexts/AuthProvider";

const AdminPage = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const [countDownData, setCountDownData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (data.title && data.targetDate && data.targetTime) {
      fetch("https://eece-server.vercel.app/countDown", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("pathano json", json);
          if (json.acknowledged) {
            toast.success("Data sent successfully");
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://eece-server.vercel.app/countDown")
      .then((response) => response.json())
      .then((data) => {
        console.log("Get all countdown data", data);
        const updatedCountdowns = data.map((countdown) => {
          if (typeof countdown.targetDate !== "string") {
            return countdown;
          }

          const formattedDate = countdown.targetDate.split("-");
          const year = parseInt(formattedDate[0]);
          const month = parseInt(formattedDate[1]) - 1; // Months are zero-based
          const day = parseInt(formattedDate[2]);

          const targetDateObj = new Date(year, month, day);

          return {
            ...countdown,
            targetDate: targetDateObj,
          };
        });
        setCountDownData(updatedCountdowns);
      });
  }, []);

  return (
    <div className="text-center shadow-inner">
      <h2 className="text-3xl p-16 text-custom-pink">
        Important Time Remaining
      </h2>
      {isAdmin ? (
        <div className="flex card items-center justify-center ">
          <h1 className="text-center text-xl text-blue-700">You can Add Count Down</h1>
          <form className=" card-body w-2/6 shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-900 text-xs">Title is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>

              <input
                className="input input-bordered"
                type="date"
                {...register("targetDate", { required: true })}
              />
              {errors.targetDate && (
                <span className="text-red-900 text-xs">Date is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                className="input input-bordered"
                type="time"
                {...register("targetTime", { required: true })}
              />
              {errors.targetTime && (
                <span className="text-red-900 text-xs">Time is required</span>
              )}
            </div>

            <input type="submit" />
          </form>
        </div>
      ) : (
        <></>
      )}

      <h2 className="text-xl/8 text-custom-pink pt-14">Times Left</h2>
      {countDownData.length > 0 ? (
        <ul className="m-14 p-6">
          {countDownData.map((countdown, index) => (
            <li className="forBorder mb-4 p-4" key={index}>
              <h3>{countdown.title}</h3>
              {/* Render the Countdown component passing the target date */}
              <Countdown targetDate={countdown?.targetDate} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No important deadline yet.</p>
      )}
    </div>
  );
};

export default AdminPage;
