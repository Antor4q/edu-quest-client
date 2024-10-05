import { Link, Outlet } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import UserRoute from "../../../components/UserRoute";
import logo from "../../../../public/logo2.png"
import { IoNotifications, IoSearch, IoSettings } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";




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

                <div className="w-[300px] bg-white fixed lg:px-10 lg:block hidden   min-h-screen px-9 py-12  ">
                        
                 <Link to="/" className="lg:text-xl lg:mr-24 flex items-center text-center relative"><div className=""> <img className="min-w-[150px]     md:min-w-[150px]" src={logo} alt="" /></div></Link>
                  <div className="mt-5">
                      <ul className="menu menu-vertical pl-0">
                            <UserRoute role={userRole?.role}></UserRoute>
                      </ul>
                  </div>
                  <div className="lg:mt-[300px]">
                    <p className="text- font-medium text-gray-400">EduQuest admin dashboard</p>
                    <p className="  text-gray-300 mt-4">© 2024 eduQuest. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="flex-1 lg:w-[1600px] bg-base-200">
                    <div className="bg-white py-6 flex justify-around z-20  lg:ml-[300px] w-full px-10 fixed">
                        <label className="input input-bordered bg-base-200 w-3/12 flex items-center gap-2">
                        <input type="text" className="grow " placeholder="Search" />
                        <IoSearch/>
                        </label>
                        <div className="flex items-center text-2xl font-semibold gap-5">
                        <MdDarkMode />
                        <AiOutlineMessage />
                        <IoNotifications />
                        <IoSettings />
                        </div>
                    </div>
                  <div className="bg-base-200  lg:ml-[300px] lg:mt-[150px]    px-4 lg:px-10 ">
                  <Outlet></Outlet>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;