import { FaUsersCog } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import TitleSection from "../../../shared/TitleSection/TitleSection";

import UsersRow from "./UsersRow";
import { IoSearch } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";


const Users = () => {
    
    const {search,setSearch} = useAuth()
    const {data,refetch} = useUsers(search)
    
    useEffect(()=>{
        refetch()
    },[search,refetch])

    const handleSearch = email => {
        
      
        setSearch(email)
    }

   
    return (
        <div>
           
            <TitleSection icon={<FaUsersCog />} subHeading={'User Management'} heading={'Overview of All Registered Users'}></TitleSection>
            <div className="lg:w-3/4 lg:h-[750px] p-10 mt-10 rounded-lg bg-base-200  lg:mx-auto">
                 <div className="flex justify-evenly">
                    <h2 className="text-2xl font-semibold">Total Users : {data?.length}</h2>
                 <label  className="input mb-6 w-1/4 input-bordered rounded-full  flex items-center gap-2">
                    <input onChange={(e)=>handleSearch(e.target.value)} type="text" className="grow" placeholder="Search by email" />
                    <IoSearch />
                    </label>
                 </div>
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
                            data?.map((user,index) => <UsersRow  key={user._id} user={user} index={index}></UsersRow>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;