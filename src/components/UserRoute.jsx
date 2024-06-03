import PropTypes from "prop-types"
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";
import StudentRoute from "./StudentRoute";

const UserRoute = ({ role}) => {
    return (
        <ul className="menu menu-vertical pl-0">
          {role === 'Admin' && <AdminRoute  />}
          {role === 'Teacher' && <TeacherRoute  />}
          {role === 'Student' && <StudentRoute />}
    </ul>
    );
};

export default UserRoute;
UserRoute.propTypes = {
    role: PropTypes.string
}