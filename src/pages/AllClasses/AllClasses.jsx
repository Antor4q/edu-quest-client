
import TitleSection from "../../shared/TitleSection/TitleSection";
import { PiVideoConferenceDuotone } from "react-icons/pi";
import Card from "./Card";
import useAuth from "../../hooks/useAuth";

import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import usePagination from "../../hooks/usePagination";

import useTotalCounts from "../../hooks/useTotalCounts";


const AllClasses = () => {
   
    const {search} = useAuth()
      const status = 'Accepted'

     const {data:totalCounts,isPending:loaded} = useTotalCounts()
  
    const perPageClasses = 10
   const totalClasses = totalCounts?.totalClasses || 11
    const pages = Math.ceil(totalClasses / perPageClasses)
    const page = [...Array(pages).keys()]
    
    const [currentPage,setCurrentPage] = useState(1)
    
    const {data:classes,refetch,isPending} = usePagination(`classes/${status}`,currentPage,perPageClasses)
    
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
    if(loaded || isPending ){
        return  <>
        <div className="flex max-w-screen h-screen items-center text-center justify-center">
        <progress className="progress w-56"></progress>
        </div>
        </>
    }
    return (
        <div className="max-w-[1420px] min-h-screen  mx-auto">
            <TitleSection icon={<PiVideoConferenceDuotone />} subHeading={'All classes'} heading={'Find Your Next Course'}></TitleSection>
            <p className="w-3/5 mx-auto text-center">Browse all available classes in one place. Whether you`re just starting or looking to advance, you`ll find courses that fit your needs. Filter by category, level, or teacher to find the right class for you and start learning today.</p>
            <div className="grid my-16 grid-cols-3 gap-10">
                {
                    classes?.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map(item => <Card key={item._id} item={item}></Card>)
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

export default AllClasses;