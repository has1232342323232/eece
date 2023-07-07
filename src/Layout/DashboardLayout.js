import React from "react";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu pt-24 lg:pt-0 w-80 h-full bg-base-200 text-base-content">
            <li>
              <Link to="/dashboard/inbox">Inbox</Link>
            </li>
            <li>
              <Link to="/dashboard/manageNotice">Manage Notice</Link>
            </li>
            <li>
              <Link to="/dashboard/manageNewsAndEvents">Manage News and Events</Link>
            </li>
            <li>
              <Link to="/dashboard/manageCountDown">Manage Count Down</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
