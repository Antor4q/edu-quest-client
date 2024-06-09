import { FaUsersCog } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import TitleSection from "../../../shared/TitleSection/TitleSection";

import UsersRow from "./UsersRow";
import { IoSearch } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr";


const Users = () => {
    
    const {search,setSearch} = useAuth()
   
    const {totalUsers} = useLoaderData()
    const perPageUser = 10
    const pages = Math.ceil(totalUsers / perPageUser)
    const page = [...Array(pages).keys()]
    const [currentPage,setCurrentPage] = useState(1)
    const {data,refetch} = useUsers(search,currentPage,perPageUser)
    
   
    useEffect(()=>{
        refetch()
    },[search,refetch,currentPage,perPageUser])

    const handleSearch = email => {
        
      
        setSearch(email)
    }
  
    const handlePrev = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if(currentPage < page.length){
            setCurrentPage( currentPage + 1)
        }
    }
   
    return (
        <div>
           
            <TitleSection icon={<FaUsersCog />} subHeading={'User Management'} heading={'Overview of All Registered Users'}></TitleSection>
            <div className="lg:w-3/4 lg:min-h-[750px] p-10 m-10 rounded-lg bg-base-200  lg:mx-auto">
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
                <div className="flex gap-4 justify-end mt-10">
                   
                    <button onClick={()=>handlePrev()} className="btn btn-outline"><GrPrevious /></button>
                     {
                        page?.map((item,index) => <>
                         <button 
                         onClick={()=>setCurrentPage( item + 1)}
                         className={`btn btn-outline  ${currentPage === item+1 && 'bg-pink-500 border-none text-white'}`} key={index}>{item + 1}</button>
                        </>)
                     }
                     <button onClick={()=>handleNext()} className="btn btn-outline"><GrNext /></button>
                </div>
            </div>
        </div>
    );
};

export default Users;