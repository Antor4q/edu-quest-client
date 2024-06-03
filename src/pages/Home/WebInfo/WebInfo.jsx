import { GrImpact } from "react-icons/gr";
import web from "../../../../public/webInfo.webp"

const WebInfo = () => {
    return (
        <div className="mb-24  py-8">
            <div className="max-w-[1440px] mx-auto flex gap-6">
                <div className="w-1/2">
                <p className="font-semibold text-pink-600 flex items-center gap-2"><GrImpact />Our Impact</p>
                    <h2 className="text-4xl font-bold">Our Impact at a Glance</h2>
                    <p className="mb-16 mt-4">Experience the transformative impact of our platform. Explore detailed statistics showcasing our growing community, the wide range of classes offered, and the significant number of student enrollments. See how our collective efforts are driving success and fostering a vibrant learning environment</p>
                  
                   <div className="card  w-full bg-base-100 border shadow-xl">
                    <div className="card-body grid grid-cols-3 gap-6  py-16 justify-evenly">
                        <div>
                        <h2 className="card-title mb-3">Total Users</h2>
                        <p className="text-3xl font-bold">+42233</p>
                        </div>
                        <div>
                        <h2 className="card-title mb-3">Total Classes</h2>
                        <p className="text-3xl font-bold">+1233</p>
                        </div>
                        <div>
                        <h2 className="card-title mb-3">Total Enrolled</h2>
                        <p className="text-3xl font-bold">+3423</p>
                        </div>
                       
                       
                      
                    </div>
                    </div>
                 
                   
                </div>
                <div className="w-1/2 ">
                    <img src={web} className="rounded-xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WebInfo;