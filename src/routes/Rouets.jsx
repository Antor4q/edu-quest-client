import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import TechOnSkillPath from "../pages/TechOnSkillPath/TechOnSkillPath";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Users from "../pages/Dashboard/Users/Users";
import Profile from "../pages/Dashboard/Profile/Profile";
import TeacherRequest from "../pages/Dashboard/TeacherRequest/TeacherRequest";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/Dashboard/Teacher/AddClass/AddClass";
import MyClass from "../pages/Dashboard/Teacher/MyClass/MyClass";
import AdminAllClass from "../pages/Dashboard/AdminAllClass/AdminAllClass";
import ClassDetails from "../pages/Dashboard/AdminAllClass/ClassDetails";
import Details from "../pages/AllClasses/Details";
import MyEnrollClass from "../pages/Dashboard/Student/MyEnrollClass";
import Payment from "../components/Payment";
import ClassDetail from "../pages/Dashboard/Teacher/ClassDetail/ClassDetail";
import MyEnrollClassDetail from "../pages/Dashboard/Student/MyEnrollClassDetail";
import MyClassModal from "../pages/Dashboard/Teacher/MyClass/MyClassModal";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "allClasses",
            element: <AllClasses></AllClasses>
        },
        {
          path: "details/:id",
          element: <Details></Details>
         },
         {
           path: "payment/:id",
           element: <Payment></Payment>
         },
        {
            path: "techOn",
            element: <PrivateRoute><TechOnSkillPath></TechOnSkillPath></PrivateRoute>
        },
        {
          path: "signIn",
          element: <SignIn></SignIn>
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path : "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // admin routes
        {
          path: "users",
          element: <Users></Users>
        },
        {
          path: "profile",
          element: <Profile></Profile>
        },
        {
          path: "teacherRequest",
          element: <TeacherRequest></TeacherRequest>
        },
        {
          path: "all-classes",
          element: <AdminAllClass></AdminAllClass>
        },
        {
          path: "class/:id",
          element: <ClassDetails></ClassDetails>
        },
        // teacher routes
        {
          path : "add-class",
          element: <AddClass></AddClass>
        },
        {
          path: "my-class",
          element: <MyClass></MyClass>
        },
        {
          path: "my-classUpdate/:id",
          element: <MyClassModal></MyClassModal>
        },
        {
          path: "my-class/:id",
          element: <ClassDetail></ClassDetail>
        },
      //  student routes
       {
        path: "myenroll-class",
        element: <MyEnrollClass></MyEnrollClass>
       },
       {
        path: "myenroll-class/:id",
        element: <MyEnrollClassDetail></MyEnrollClassDetail>
       }
       
      ]
    }
  ]);

