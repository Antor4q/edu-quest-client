
import TitleSection from "../../../shared/TitleSection/TitleSection";
import { FaUsersCog } from "react-icons/fa";
import TeacherReqRow from "./TeacherReqRow";
import useTotalCounts from "../../../hooks/useTotalCounts";
import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import usePagination from "../../../hooks/usePagination";


const TeacherRequest = () => {
  
    const {data} = useTotalCounts()
    const totalTeachers = data?.totalTeachers || 11
    const perPageTeacher = 10
  
    const pages = Math.ceil(totalTeachers / perPageTeacher)
    
    const page = [...Array(pages).keys()]
    
    const [currentPage,setCurrentPage] = useState(1)
    
    const {data:filterData,refetch} = usePagination("teachers",currentPage,perPageTeacher)
    

    useEffect(()=>{
        refetch()
    },[refetch,currentPage])

   

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
           
            <TitleSection icon={<FaUsersCog />} subHeading={'Teacher Request'} heading={'Overview of All Requested Teachers'}></TitleSection>
            <div className=" p-10 mt-10 rounded-lg bg-white  lg:mx-8">
                
                <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Experience</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                          {
                            filterData?.map((teacher,index) => <TeacherReqRow key={teacher._id} refetch={refetch} teacher={teacher} index={index}></TeacherReqRow>)
                          }
                        </tbody>
                    </table>
                </div>
               
                
            </div>
            <div className="flex gap-4 p-10 justify-end mb-20 mt-10">
                   
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
    );
};

export default TeacherRequest;