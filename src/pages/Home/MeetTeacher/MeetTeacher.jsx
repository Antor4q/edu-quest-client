import { PiChalkboardTeacherFill } from "react-icons/pi";
import TitleSection from "../../../shared/TitleSection/TitleSection";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const MeetTeacher = () => {
    return (
        <div className="lg:my-28">
            <div className="lg:max-w-[1440px]  mx-auto">
                <TitleSection icon={<PiChalkboardTeacherFill />} heading={'Get to Know Our Expert Teachers'} subHeading={'Our Teachers'}></TitleSection>
                <div className="py-6">
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                       
                        modules={[Pagination, Autoplay]}
                    >
                        <SwiperSlide>
                            <div>
                            <div className="avatar ">
                            <div className="w-80 relative   rounded-full">
                            
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                <div className="flex opacity-0 transition-opacity duration-700 hover:opacity-100 z-10 hover:cursor-pointer text-white hover:text-pink-600 text-4xl  items-center bottom-10 left-24 absolute gap-3">
                                        <FaFacebook></FaFacebook>
                                    <FaLinkedin></FaLinkedin>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                            
                            </div>
                               <h2 className="text-2xl font-bold my-3">Ahmed Antor</h2>
                               <p className="text-pink-500">Founder & CEO</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <div className="avatar">
                            <div className="w-80 relative  rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                <div className="flex opacity-0 transition-opacity duration-700 hover:opacity-100 z-10 hover:cursor-pointer text-white hover:text-pink-600 text-4xl  items-center bottom-10 left-24 absolute gap-3">
                                        <FaFacebook></FaFacebook>
                                    <FaLinkedin></FaLinkedin>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                            </div>
                               <h2 className="text-2xl font-bold my-3">Sadiya Rahman</h2>
                               <p className="text-pink-500">Senior Teacher</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <div className="avatar">
                            <div className="w-80 relative rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                <div className="flex z-10 opacity-0 transition-opacity duration-700 hover:opacity-100 hover:cursor-pointer text-white hover:text-pink-600 text-4xl  items-center bottom-10 left-24 absolute gap-3">
                                        <FaFacebook></FaFacebook>
                                    <FaLinkedin></FaLinkedin>
                                    <FaInstagram></FaInstagram>
                                </div>
                                
                            </div>
                            </div>
                               <h2 className="text-2xl font-bold my-3">Michel Jon</h2>
                               <p className="text-pink-500">Senior Teacher</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <div className="avatar">
                            <div className="w-80 relative rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                <div className="flex opacity-0 transition-opacity duration-700 hover:opacity-100 z-10 hover:cursor-pointer text-white hover:text-pink-600 text-4xl  items-center bottom-10 left-24 absolute gap-3">
                                        <FaFacebook></FaFacebook>
                                    <FaLinkedin></FaLinkedin>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                            </div>
                               <h2 className="text-2xl font-bold my-3">Fahana</h2>
                               <p className="text-pink-500">Junior Teacher</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <div className="avatar">
                            <div className="w-80 relative rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                <div className="flex opacity-0 transition-opacity duration-700 hover:opacity-100 z-10 hover:cursor-pointer text-white hover:text-pink-600 text-4xl  items-center bottom-10 left-24 absolute gap-3">
                                        <FaFacebook></FaFacebook>
                                    <FaLinkedin></FaLinkedin>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                            </div>
                               <h2 className="text-2xl font-bold my-3">Mariyom</h2>
                               <p className="text-pink-500">Teacher</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <div className="avatar">
                            <div className="w-80 relative rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                <div className="flex opacity-0 transition-opacity duration-700 hover:opacity-100 z-10 hover:cursor-pointer text-white hover:text-pink-600 text-4xl  items-center bottom-10 left-24 absolute gap-3">
                                        <FaFacebook></FaFacebook>
                                    <FaLinkedin></FaLinkedin>
                                    <FaInstagram></FaInstagram>
                                </div>
                            </div>
                            </div>
                               <h2 className="text-2xl font-bold my-3">Safa</h2>
                               <p className="text-pink-500">Teacher</p>
                            </div>
                        </SwiperSlide>
                        
                        
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MeetTeacher;