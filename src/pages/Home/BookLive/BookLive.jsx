
import web from "../../../assets/book.avif"
import { FaBookReader } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const BookLive = () => {
    return (
        <div className="lg:mb-24 px-3 mlg:px-0 mb-16 py-6  lg:py-8">
        <div className="lg:max-w-[1440px] mx-auto flex lg:flex-row flex-col gap-6">
            <div className="lg:w-2/5 md:px-5 lg:px-0 px-0">
            <p className="font-semibold text-[#0D6EFD] flex items-center md:justify-start justify-center gap-2 mb-3"><FaBookReader />Book Our Expertise Teachers</p>
                <h2 className="lg:text-5xl text-2xl font-bold">Access Live Consultancy and Interactive Classes Anytime</h2>
                <p className=" mt-4">BookLive connects you with experts for real-time advice and interactive live classes, providing a seamless and convenient way to enhance your learning experience and receive professional help. Whether you need guidance on a specific topic or wish to deepen your knowledge in a particular field.</p>
                    <ul className="font-semibold mt-2">
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-[#0D6EFD]" /><span>Expert Consultations</span></li>
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-[#0D6EFD]" /><span>Interactive Classes</span></li>
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-[#0D6EFD]" /><span>Flexible Learning</span></li>
                        <li className="flex items-center gap-2"><IoCheckmarkDoneCircleSharp className="text-[#0D6EFD]" /><span>Live Q&A Sessions</span></li>
                       
                    </ul>
                    <button className="flex lg:btn lg:text-[#0D6EFD] btn btn-sm mt-3 lg:btn-outline btn-outline text-[#0D6EFD] ">Book Now <FaArrowRightLong /></button>
             
             
               
            </div>
            <div className="lg:w-3/5 mx-auto">
                <img src={web} className="rounded-xl border-[20px] border-white shadow-xl" alt="" />
            </div>
        </div>
    </div>
    );
};

export default BookLive;