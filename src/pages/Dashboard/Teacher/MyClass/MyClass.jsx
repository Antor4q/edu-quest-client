import { MdManageAccounts } from "react-icons/md";
import TitleSection from "../../../../shared/TitleSection/TitleSection";
import useAuth from "../../../../hooks/useAuth";

import MyClassCard from "./MyClassCard";
import { useEffect, useState } from "react";
import useTotalCounts from "../../../../hooks/useTotalCounts";
import { GrNext, GrPrevious } from "react-icons/gr";
import usePagination from "../../../../hooks/usePagination";


const MyClass = () => {
    const {user} = useAuth()
  
    const {data:totalCounts} = useTotalCounts()
    const totalClasses = totalCounts?.totalClasses || 12
    const perPageClasses = 10
    const pages = Math.ceil(totalClasses / perPageClasses)
    const page = [...Array(pages).keys()]
    const [currentPage,setCurrentPage] = useState(1)
    const {data:allData,refetch,isPending} = usePagination(`class/${user?.email}`,currentPage, perPageClasses)

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
  

    if(isPending){
       
        return <span className="font-bold text-4xl text-center">Loading...</span>
    }
    return (
        <div>
            <TitleSection subHeading={'Overview Your classes'} icon={<MdManageAccounts></MdManageAccounts>} heading={"Mange your all classes here"}></TitleSection>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 my-24 pl-10">
               {
                allData?.map(cla => <MyClassCard key={cla._id} cla={cla} isPending={isPending} refetch={refetch}></MyClassCard>)
               }
                
            </div>
            <div className="flex mb-20 mr-20 gap-4 justify-end mt-10">
                   
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

export default MyClass;