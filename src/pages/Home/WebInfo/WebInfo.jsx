import { GrImpact } from "react-icons/gr";
import web from "../../../../public/webInfo.webp"

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const WebInfo = () => {

    const axiosPublic = useAxiosPublic()
    const {data} = useQuery({
        queryKey: ['info'],
        queryFn: async()=>{
            const {data} = await axiosPublic.get("/impact")
            return data
        }
    })
   
    return (
        <div className="lg:mb-24 px-3 lg:px-0 mb-16 py-6 lg:py-8">
            <div className="lg:max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-3 lg:gap-6">
                <div className="lg:w-1/2">
                <p className="font-semibold text-[#0D6EFD] flex items-center gap-2"><GrImpact />Our Impact</p>
                    <h2 className="lg:text-4xl text-3xl font-bold">Our Impact at a Glance</h2>
                    <p className="mb-16 mt-4">Experience the transformative impact of our platform. Explore detailed statistics showcasing our growing community, the wide range of classes offered, and the significant number of student enrollments. See how our collective efforts are driving success and fostering a vibrant learning environment</p>
                  
                   <div className="card  w-full bg-base-100 border shadow-xl">
                    <div className="card-body grid grid-cols-3 gap-6 py-10   lg:py-16 justify-evenly">
                        <div>
                        <h2 className="card-title mb-3">Total Users</h2>
                        <p className="lg:text-3xl text-2xl font-bold">+{data?.totalUsers}</p>
                        </div>
                        <div>
                        <h2 className="card-title mb-3">Total Classes</h2>
                        <p className="lg:text-3xl text-2xl font-bold">+{data?.totalClasses}</p>
                        </div>
                        <div>
                        <h2 className="card-title mb-3">Total Enrolled</h2>
                        <p className="lg:text-3xl text-2xl font-bold">+{data?.totalEnrolled}</p>
                        </div>
                       
                       
                      
                    </div>
                    </div>
                 
                   
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <img src={web} className="rounded-xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WebInfo;