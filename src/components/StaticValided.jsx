import useRole from "../hooks/useRole";
import Statics from "../pages/Dashboard/Statics/Statics";
import StudentStatics from "../pages/Dashboard/Student/StudentStatics";
import TeacherStatic from "../pages/Dashboard/Teacher/TeacherStatic/TeacherStatic";


const StaticValided = () => {
    const [userRole] = useRole()
    return (
       <>
        {userRole?.role === 'Admin' && <Statics/>}
          {userRole?.role === 'Teacher' && <TeacherStatic/>}
          {userRole?.role === 'Student' && <StudentStatics/>}
       </>
    );
};

export default StaticValided;