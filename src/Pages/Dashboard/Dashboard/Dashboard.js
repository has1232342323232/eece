import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to the Private Dashboard</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link className="btn bg-custom-pink hover:bg-hover-bg" to="/dashboard/inbox">Goto Inbox</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
