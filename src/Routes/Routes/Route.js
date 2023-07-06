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

const router = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        children: [
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
    }
])
export default router;