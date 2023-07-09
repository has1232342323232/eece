import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const StudentDetails = () => {
  const [data, setData] = useState([]);
  console.log(data.name);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/allRegisterUsers/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("students", data);
        setData(data);
        toast.success("Data loaded Successful");
      });
  }, [user?.email]);

  return (
    <div>
        <br/><br/>
      <h1 className="text-3xl text-center">Welcome, {data?.name}</h1>
      <br/>

        {/* your avatar code */}
      <div className="avatar flex items-center justify-center">
        <div className="w-2/5 rounded-full">
          <img src="https://i.ibb.co/n8hLzr0/rashel-sir.png" />
        </div>
      </div>

  <br/>
      <div className="divider text-2xl">Student Profile</div>
      <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">{data?.name}</h1>
            <br/>
            <h2 className="text-xl text-custom-pink">Department Name: {data?.department_name}</h2>
            <br/>
            <h3 className="text-xl ">Department Name: {data?.session}</h3>
            <br/>
            <h3 className="text-xl text-emerald-500">Father's Name: {data?.fathers_name}</h3>
            <br/>
            <h3 className="text-xl text-emerald-500">Mothers's Name: {data?.mothers_name}</h3>
            <br/>
            {/* open modal code */}
            <button
              className="btn btn-primary"
              onClick={() => window.my_modal_3.showModal()}
            >
              See Advise
            </button>
            <dialog id="my_modal_3" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <h3 className="font-bold text-lg">Hey {data?.name}</h3>
                <p className="py-4">
                  Congrats to you to your profile. Never stop learning and Stick to ..
                </p>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <h4 className="text-red-700">Your Logged In Email Address: {data?.email}</h4>
        <br/><br/>
      <div className="divider text-2xl">My Result Sheet</div>
      <h1>Result sheet is coming soon</h1>
    </div>
  );
};

export default StudentDetails;
