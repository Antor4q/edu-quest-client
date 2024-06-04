import { PiChalkboardTeacherFill } from "react-icons/pi";
import TitleSection from "../../../shared/TitleSection/TitleSection";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import { FaPlus } from "react-icons/fa6";

const MeetTeacher = () => {
    const [users] = useUsers()
     const data = users?.filter(user => user.role !== 'Student')
    
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
                        {
                            data?.map(user =>    <SwiperSlide key={user._id}>
                                <div>
                                <div className="avatar border-8 rounded-full grid items-center">
                                <div className="w-80  relative   rounded-full">
                                
                                    <img src={user.image} />
                                    
                                   
                                </div>
                                   <div  className="relative tooltip w-14 h-14 z-50 -mr-24 -mt-40  " data-tip="Book Consultancy">
                                        <p className="text-4xl  cursor-pointer  p-2 text-white rounded-full z-10 font-bold bg-pink-500"><FaPlus></FaPlus></p>
                                        {/* <div className="flex opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10 hover:cursor-pointer  hover:text-pink-600 text-4xl  items-center bottom-10 left-24  gap-3">
                                            <FaFacebook></FaFacebook>
                                        <FaLinkedin></FaLinkedin>
                                        <FaInstagram></FaInstagram>
                                     </div> */}
                                    </div>
                                   
                                
                                </div>
                                   <h2 className="text-2xl font-bold my-3">{user.name}</h2>
                                   <p className="text-pink-500">{user.role === 'Admin' ? 'Founder & CEO': user.role}</p>
                                </div>
                            </SwiperSlide>
                         )
                        }
                        
                     
                      
                      
                        
                        
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MeetTeacher;