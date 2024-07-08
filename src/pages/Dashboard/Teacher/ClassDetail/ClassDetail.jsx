import { FaPlus } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Chart from "../../../../components/Chart";
import CommonBanner from "../../../../shared/CommonBanner/CommonBanner";


const ClassDetail = () => {
    const [count,setCount] = useState(0)
    const id = useParams()
    const axiosSecure = useAxios()
    const {data} = useQuery({
        queryKey: ['class'],
        queryFn: async()=>{
            const {data} = await  axiosSecure.get(`/myClasses/${id?.id}`)
            return data
        }
        
    })
   const title = data?.title
   const {data:info,isPending} = useQuery({
    queryKey: ['classInfo'],
    queryFn: async()=>{
        const {data:info} = await  axiosSecure.get(`/classInfo/${title}`)
        return info
    }
    
})

  if(isPending){
    return  <>
    <div className="flex max-w-screen h-screen items-center text-center justify-center">
    <progress className="progress w-56"></progress>
    </div>
    </>
  }
    return (
        <div className="bg-base-200 lg:min-h-screen">
            <CommonBanner title={data?.title}/>
           <div className="lg:w-5/6 lg:pb-20 pb-16 mx-auto">
            <div>
                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn my-10 btn-outline text-white bg-[#0D6EFD]"><FaPlus></FaPlus> Create</button>
                <Modal data={data} setCount={setCount} count={count}/>
              
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center lg:items-start lg:gap-16 py-10 pb-20">
                <div className="shadow-xl text-white bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] p-8 font-medium rounded-xl h-[200px] w-[300px]">
                    <div className="flex  justify-between">
                      
                       <p>Total Enrolled</p>
                      
                     
                        <p className=" rounded-lg px-4 py-2 text-white text-4xl font-bold"><FaUsersRectangle  /></p>
                    </div>
                    <p className="text-4xl  font-bold">+{info?.totalEnrolled}</p>
                </div>
                <div className="shadow-xl text-white bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-8 font-medium rounded-xl h-[200px] w-[300px]">
                    <div className="flex justify-between">
                        <p>Total Assignment</p>
                        <p className=" rounded-lg px-4 py-2 text-white text-3xl font-bold"><MdAssignment /></p>
                    </div>
                    <p className="text-4xl font-bold">+{info?.totalASsignments}</p>
                </div>
                <div className="shadow-xl text-white bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-8 font-medium rounded-xl h-[200px] w-[300px]">
                    <div className="flex justify-between">
                        <p> Per day assignment submitted</p>
                        <p className=" h-[48px] rounded-lg px-4 py-2 text-white text-3xl font-bold"><VscFileSubmodule /></p>
                    </div>
                    <p className="text-4xl font-bold">+{info?.perDaySubmit}</p>
                </div>
                
            </div>
            <div>
                <Chart info={info}/>
            </div>
           
           </div>
        </div>
    );
};

export default ClassDetail;