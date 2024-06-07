import { FaPlus } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { MdAssignment } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

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
   
    return (
        <div className="bg-base-200 min-h-screen">
           <div className="w-4/6 mx-auto">
            <div>
                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn my-10 btn-outline text-white bg-pink-500"><FaPlus></FaPlus> Create</button>
                <Modal data={data} setCount={setCount} count={count}/>
              
            </div>
           <div className="flex gap-16 py-10 pb-20">
                <div className="shadow-xl p-8 font-medium rounded-xl h-[200px] w-[250px]">
                    <div className="flex justify-between">
                        <p>Total Enrolled</p>
                        <p className="bg-pink-500 rounded-lg px-4 py-2 text-white text-3xl font-bold"><FaUsersRectangle  /></p>
                    </div>
                    <p className="text-4xl font-bold">+231</p>
                </div>
                <div className="shadow-xl p-8 font-medium rounded-xl h-[200px] w-[250px]">
                    <div className="flex justify-between">
                        <p>Total Assignment</p>
                        <p className="bg-pink-500 rounded-lg px-4 py-2 text-white text-3xl font-bold"><MdAssignment /></p>
                    </div>
                    <p className="text-4xl font-bold">+{count}</p>
                </div>
                <div className="shadow-xl p-8 font-medium rounded-xl h-[200px] w-[250px]">
                    <div className="flex justify-between">
                        <p> Per day assignment submitted</p>
                        <p className="bg-pink-500 h-[48px] rounded-lg px-4 py-2 text-white text-3xl font-bold"><VscFileSubmodule /></p>
                    </div>
                    <p className="text-4xl font-bold">+31</p>
                </div>
                
            </div>
           </div>
        </div>
    );
};

export default ClassDetail;