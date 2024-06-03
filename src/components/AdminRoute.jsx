import { NavLink } from "react-router-dom";

const AdminRoute = () => {
    return (
        <>
        <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/teacherRequest"> Teacher Request</NavLink></li>
        <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/users"> Users</NavLink></li>
        <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/all-classes"> All Classes</NavLink></li>
        <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/profile"> Profile</NavLink></li>
     </>
    );
};

export default AdminRoute;