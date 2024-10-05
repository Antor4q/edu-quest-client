import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { RiArrowTurnForwardFill } from "react-icons/ri";
import { SiHyperskill } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const AdminRoute = () => {
    return (
        <>
        <li><NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/statics"><RiArrowTurnForwardFill /> Statics</NavLink></li>
        <li><NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/teacherRequest"><PiChalkboardTeacherFill /> Teacher Request</NavLink></li>
        <li><NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/users"><FaUsers /> Users</NavLink></li>
        <li><NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/all-classes"><SiHyperskill /> All Classes</NavLink></li>
        <li><NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/blogs"><FaBloggerB /> Blogs</NavLink></li>
        <li><NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/blogs"><MdOutlineCreateNewFolder /> Publish blog</NavLink></li>
        <li><NavLink className="flex hover:bg-[#2f82ff95] items-center gap-2" style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/dashboard/profile"><CgProfile /> Profile</NavLink></li>
     </>
    );
};

export default AdminRoute;