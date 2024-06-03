import { NavLink } from "react-router-dom";


const TeacherRoute = () => {
    return (
       <>
       
       <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/add-class"> Add class</NavLink></li>
       <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/my-class"> My class</NavLink></li>
         <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/profile"> Profile</NavLink></li>
       </>
    );
};

export default TeacherRoute;