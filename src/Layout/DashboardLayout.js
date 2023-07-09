import React from "react";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard, faImage, faInbox, faList, faQuestion, faRightFromBracket, faSchool } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper, faTimesCircle, faTimesRectangle } from "@fortawesome/free-regular-svg-icons";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {


  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  console.log("isAdmin", isAdmin)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logout Successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu pt-24 lg:pt-0 w-80 h-full bg-black text-white text-base-content">
          <div className="divider text-xl pt-14">Menu</div>
            <li>
            <Link to="/dashboard/inbox"> <FontAwesomeIcon icon={faInbox} beatFade size="lg" style={{color: "#fa0000",}} />  Inbox</Link>
            </li>
           {
            isAdmin ? <>
            <li>
              <Link to="/dashboard/allUsers"> <FontAwesomeIcon icon={faList} beatFade size="lg" style={{color: "#ff0000",}} /> All Registered Users</Link>
            </li>
            <li>
              <Link to="/dashboard/manageCountDown"> <FontAwesomeIcon icon={faTimesCircle} beatFade size="lg" style={{color: "#ff0000",}} />Manage Count Down</Link>
            </li>
            <li>
              <Link to="/dashboard/manageNewsAndEvents"><FontAwesomeIcon icon={faNewspaper} beatFade size="lg" style={{color: "#ff0000",}} /> Manage News and Events</Link>
            </li>
            <li>
              <Link to="/dashboard/manageNotice"> <FontAwesomeIcon icon={faClapperboard} beatFade size="lg" style={{color: "#ff0000",}} /> Manage Notice</Link>
            </li>
            <li>
              <Link to="/dashboard/manageGallery"> <FontAwesomeIcon icon={faImage} beatFade size="lg" style={{color: "#ff0000",}} /> Manage Gallery</Link>
            </li>


            </> : <>
            <li>
              <Link to="/dashboard/studentDetails"> <FontAwesomeIcon icon={faSchool} beatFade size="lg" style={{color: "#ff0000",}} />Students</Link>
             </li>
            </>
           }
           <li>
              <Link to="/dashboard/faq"> <FontAwesomeIcon icon={faQuestion} beatFade size="lg" style={{color: "#f90606",}} />FAQ</Link>
             </li>
            {user?.uid &&
              <>
                <li>
                  <button onClick={handleLogOut}> <FontAwesomeIcon icon={faRightFromBracket} beatFade size="lg" style={{color: "#ff0000",}} /> Sign Out</button>
                </li>
              </>
                }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
