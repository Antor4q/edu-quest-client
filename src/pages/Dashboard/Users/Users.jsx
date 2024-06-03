import { FaUsersCog } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import TitleSection from "../../../shared/TitleSection/TitleSection";

import UsersRow from "./UsersRow";


const Users = () => {
    const [users] = useUsers()
    return (
        <div>
           
            <TitleSection icon={<FaUsersCog />} subHeading={'User Management'} heading={'Overview of All Registered Users'}></TitleSection>
            <div className="lg:w-3/4 p-10 mt-10 rounded-lg bg-base-200  lg:mx-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>User Name</th>
                            <th>User Image</th>
                            <th>User Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                        </thead>
                        <tbody>
                         {
                            users?.map((user,index) => <UsersRow key={user._id} user={user} index={index}></UsersRow>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;