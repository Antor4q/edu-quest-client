import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import TechOnSkillPath from "../pages/TechOnSkillPath/TechOnSkillPath";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";


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
            element: <TechOnSkillPath></TechOnSkillPath>
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
      element: <Dashboard></Dashboard>
    }
  ]);

