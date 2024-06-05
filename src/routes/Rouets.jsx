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
       
      ]
    }
  ]);

