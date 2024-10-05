import {  FaVideo } from "react-icons/fa";
import TitleSection from "../../../shared/TitleSection/TitleSection";
import AdminACRow from "./AdminACRow";

import useTotalCounts from "../../../hooks/useTotalCounts";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import usePagination from "../../../hooks/usePagination";


const AdminAllClass = () => {
  
    const {data,isPending} = useTotalCounts()
    const totalClasses = data?.totalClasses || 11
    const perPageClasses = 10
 
    const pages = Math.ceil(totalClasses / perPageClasses)
    const page = [...Array(pages).keys()]
   
    const [currentPage,setCurrentPage] = useState(1)
    
    const {data:classes,refetch,isPending:loaded} = usePagination("classes",currentPage,perPageClasses)


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

  if(isPending || loaded){
    return  <>
    <div className="flex max-w-screen h-screen items-center text-center justify-center">
    <progress className="progress w-56"></progress>
    </div>
    </>
  }
   
    return (
        <div>
           
        <TitleSection icon={<FaVideo />} subHeading={'All classes'} heading={'Overview of All Classes'}></TitleSection>
        <div className=" p-8 my-10 rounded-lg bg-white mx-8 ">
            
            <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                        <th>
                           
                        </th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Short description</th>
                        
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        classes?.map((cla,index) =>  <AdminACRow key={cla._id} cla={cla} refetch={refetch} index={index}></AdminACRow>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="flex mb-20 mr-20 gap-4 justify-end mt-10">
                   
                    <button onClick={()=>handlePrev()} className="btn btn-outline"><GrPrevious /></button>
                     {
                        page?.map((item,index) => <>
                         <button 
                         onClick={()=>setCurrentPage( item + 1)}
                         className={`btn btn-outline  ${currentPage === item+1 && 'bg-[#0D6EFD] border-none text-white'}`} key={index}>{item + 1}</button>
                        </>)
                     }
                     <button onClick={()=>handleNext()} className="btn btn-outline"><GrNext /></button>
                </div>
    </div>
    );
};

export default AdminAllClass;