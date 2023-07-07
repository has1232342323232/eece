import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import {createBrowserRouter} from "react-router-dom";
import Login from "../../Pages/Login/Login";
import ShowAllNotices from "../../Pages/ShowAllNotices/ShowAllNotices";
import ShowAllNewsAndEvents from "../../Pages/ShowAllNewsAndEvents/ShowAllNewsAndEvents";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Students from "../../Pages/Students/Students";
import Alumni from "../../Pages/Alumni/Alumni";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Teachers from "../../Pages/Teachers/Teachers";
import TeachersDetail from "../../Pages/Teachers/TeachersDetail/TeachersDetail";
import Register from "../../Pages/Login/Register/Register";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Inbox from "../../Pages/Dashboard/Inbox/Inbox";
import ManageNotice from "../../Pages/Dashboard/ManageNotice/ManageNotice";
import ManageNewsAndEvents from "../../Pages/Dashboard/ManageNewsAndEvents/ManageNewsAndEvents";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/showAllNotices',
                element: <ShowAllNotices></ShowAllNotices>
            },
            {
                path: '/showAllNewsAndEvents',
                element: <ShowAllNewsAndEvents></ShowAllNewsAndEvents>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/students',
                element: <Students></Students>
            },
            {
                path: '/alumni',
                element: <Alumni></Alumni>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/teachers',
                element: <Teachers></Teachers>
            },

            {
                path: '/faculty-profile/:id',
                element: <TeachersDetail></TeachersDetail>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/inbox',
                element: <Inbox></Inbox>
            },
            {
                path: '/dashboard/manageNotice',
                element: <ManageNotice></ManageNotice>
            },
            {
                path: '/dashboard/manageNewsAndEvents',
                element: <ManageNewsAndEvents></ManageNewsAndEvents>
            },
            {
                path: '/dashboard/manageCountDown',
                element: <Dashboard></Dashboard>
            },
            
        ]
    }
])
export default router;