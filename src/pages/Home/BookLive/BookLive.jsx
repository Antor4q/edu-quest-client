
import web from "../../../assets/book.avif"
import { FaBookReader } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const BookLive = () => {
    return (
        <div className="mb-24  py-8">
        <div className="max-w-[1440px] mx-auto flex gap-6">
            <div className="w-2/5">
            <p className="font-semibold text-pink-600 flex items-center gap-2 mb-3"><FaBookReader />Book Our Expertise Teachers</p>
                <h2 className="text-5xl font-bold">Access Live Consultancy and Interactive Classes Anytime</h2>
                <p className=" mt-4">BookLive connects you with experts for real-time advice and interactive live classes, providing a seamless and convenient way to enhance your learning experience and receive professional help. Whether you need guidance on a specific topic or wish to deepen your knowledge in a particular field.</p>
                    <ul className="font-semibold mt-2">
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-pink-600" /><span>Expert Consultations</span></li>
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-pink-600" /><span>Interactive Classes</span></li>
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-pink-600" /><span>Flexible Learning</span></li>
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-pink-600" /><span>Live Q&A Sessions</span></li>
                       
                    </ul>
                    <button className="flex btn mt-3 btn-outline text-pink-600 ">Book Now <FaArrowRightLong /></button>
             
             
               
            </div>
            <div className="w-3/5 ">
                <img src={web} className="rounded-xl border-[20px] border-white shadow-xl" alt="" />
            </div>
        </div>
    </div>
    );
};

export default BookLive;