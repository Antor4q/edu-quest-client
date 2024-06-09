
import TitleSection from "../../../shared/TitleSection/TitleSection";

import Card from "./Card";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

import useAuth from "../../../hooks/useAuth";
import useTotalCounts from "../../../hooks/useTotalCounts";
import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import usePagination from "../../../hooks/usePagination";



const MyEnrollClass = () => {
   
    const {user} = useAuth()
    const {data:totalEnrolledClass} = useTotalCounts()
     const myEnrolledClasses = totalEnrolledClass?.totalEnrolledClass || 2
     const perPageClasses = 10
     const pages = Math.ceil(myEnrolledClasses / perPageClasses)
     const page = [...Array(pages).keys()]
     const [currentPage,setCurrentPage] = useState(1)
     const {data:classes,refetch} = usePagination(`myEnrolled/${user?.email}`,currentPage,perPageClasses)

     useEffect(()=>{
        refetch()
    },[refetch,currentPage])
     console.log(classes)


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
            <TitleSection subHeading={"Enrolled Classes"} heading={"Hey! Your all enrolled class here"}></TitleSection>
             {
                classes?.length < 1 && <div className="flex mt-20  w-4/6 mx-auto flex-col items-center justify-center">
                        <div>
                        <h2 className="text-3xl font-bold">Oops! You have not enrolled<br></br> in any class</h2>
                        <Link to="/allClasses" className="btn btn-outline bg-pink-600 text-white mt-5">Go to enroll an a class <FaArrowCircleRight></FaArrowCircleRight></Link>
                        </div>
                </div>
             }
            {
                classes?.length > 0 && <>
                
                <div className="grid grid-cols-3 gap-8 w-5/6 mx-auto">
                {
                    classes?.map( item => <Card key={item._id} item={item}></Card>)
                }
            </div>
                </>
            }

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

export default MyEnrollClass;