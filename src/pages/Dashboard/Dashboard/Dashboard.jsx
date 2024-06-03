import { Link } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import UserRoute from "../../../components/UserRoute";






const Dashboard = () => {
    const [userRole] = useRole()
   
    return (
        <div>
           
            <div className="flex gap-10">
                <div className="w-[340px] px-9 py-12 bg-pink-100 h-screen">
                 <Link to="/" className="text-3xl">SkillPath</Link>
                  <div className="mt-5">
                      <ul className="menu menu-vertical pl-0">
                            <UserRoute role={userRole.role}></UserRoute>
                      </ul>
                  </div>
                </div>
                <div className="flex-1 py-12">
                <h2 className="text-3xl">This is Dashboard Outlets</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;