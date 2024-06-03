import { NavLink } from "react-router-dom";


const StudentRoute = () => {
    return (
      <>
         <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/myenroll-class"> My enroll class</NavLink></li>
         <li><NavLink style={({isActive})=> isActive? {color: "#DB2777",background:"none"}:{}} to="/dashboard/profile"> Profile</NavLink></li>
      </>
    );
};

export default StudentRoute;