import { Link, Outlet } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import UserRoute from "../../../components/UserRoute";





const Dashboard = () => {
    const [userRole] = useRole()
   
    return (
        <div className="">
           
            <div className="flex lg:flex-row flex-col ">
                      <div className="dropdown py-3 bg-base-300">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <UserRoute role={userRole?.role}></UserRoute>
                        </ul>
                        <Link to="/" className="text-xl lg:hidden font-bold">EduQuest</Link>
                        </div>

                <div className="w-[340px] lg:block hidden text-white  min-h-screen px-9 py-12 bg-gray-900 ">
                        
                <Link to="/" className="text-xl  font-bold">EduQuest</Link>
                  <div className="mt-5">
                      <ul className="menu menu-vertical pl-0">
                            <UserRoute role={userRole?.role}></UserRoute>
                      </ul>
                  </div>
                </div>
                <div className="flex-1 px-4 lg:px-0  ">
                   <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;