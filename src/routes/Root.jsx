import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { FaFacebookF, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Root = () => {
    return (
        <div>
             <div className="py-3 px-3 lg:px-0  bg-gray-900 ">
                <div className="flex items-center justify-between text-white lg:max-w-[1440px] mx-auto">
                <div className="flex items-center  ">
                <h3 className="md:mr-3 mr-1 flex items-center text-sm lg:text-xl gap-1 md:gap-2"><FaPhone />+9934234332</h3>
                <h3 className="border-l md:px-3 flex text-sm lg:text-xl items-center gap-1 md:gap-2"><MdEmail />eduQuest@gmail.com</h3>
               
                </div>
                <div className="flex items-center md:text-xl text-sm  gap-2 md:gap-5">
                <a href="https://www.facebook.com/antor.hossain.148116" target="_blank"> <FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/ahmedantor" target="_blank"><FaLinkedinIn /></a>
                 <a href="https://github.com/Antor4q" target="_blank"><FaTwitter /></a>
                </div>
                </div>
             </div>
             <div className="sticky shadow-lg bg-white top-0 z-40">
             <Navbar></Navbar>
             </div>
           
             <div >
             <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;