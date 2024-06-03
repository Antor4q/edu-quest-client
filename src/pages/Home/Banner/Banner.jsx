import { FaArrowRightLong } from "react-icons/fa6";
import girl1 from "../../../../public/girl1.png"
import girl2 from "../../../../public/girl2.png"
import girl3 from "../../../../public/girl3.png"
// import bg1 from "../../../../public/bg1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div  className=" lg:h-[700px]" >
            
            
           
              <Swiper
              
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="w-screen bg-cover bg-no-repeat" style={{backgroundImage : 'url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_2_1.png)'}}>
        <div className="flex items-start pt-5 bg-none bg-transparent justify-between max-w-[1440px] mx-auto">
                <div className="w-1/2  flex flex-col justify-center min-h-[700px]">
                <h2 className="text-6xl text-start  font-bold  w-1/2">Hey! Lets Start With <span className="text-[#B51B75]">SkillPath</span> </h2>
                <p className=" my-7 text-start ">Explore our collection of courses to learn new skills. Start your journey towards personal and professional growth today!</p>
                <div className="flex gap-5">
                <Link to="/techOn" className="btn bg-[#B51B75] hover:btn-outline hover:text-[#B51B75] border-none text-white">Tech On SkillPath</Link>
                <Link to="/allClasses" className="btn btn-outline text-[#FFC107]">
                Browse Classes
                <FaArrowRightLong /></Link>
                </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="">
                    <img src={girl1} className="w-full min-h-[700px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-screen bg-cover bg-no-repeat" style={{backgroundImage : 'url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_2_1.png)'}}>
        <div className="flex items-start pt-5 bg-none bg-transparent justify-between max-w-[1440px] mx-auto">
                <div className="w-1/2  flex flex-col justify-center min-h-[700px]">
                <h2 className="text-6xl text-start  font-bold  w-1/2">Learn Anywhere, <span className="text-[#B51B75]">Anytime</span> </h2>
                <p className=" my-7 text-start ">Access our diverse courses at your convenience. Learn at your own pace and empower yourself with knowledge.</p>
                <div className="flex gap-5">
                <Link to="/techOn" className="btn bg-[#B51B75] hover:btn-outline hover:text-[#B51B75] border-none text-white">Tech On SkillPath</Link>
                <Link to="/allClasses" className="btn btn-outline text-[#FFC107]">
                Browse Classes
                <FaArrowRightLong /></Link>
                </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="">
                    <img src={girl2} className="w-full min-h-[700px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-screen bg-cover bg-no-repeat" style={{backgroundImage : 'url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_2_1.png)'}}>
        <div className="flex items-start pt-5 bg-none bg-transparent justify-between max-w-[1440px] mx-auto">
                <div className="w-1/2  flex flex-col justify-center min-h-[700px]">
                <h2 className="text-6xl text-start  font-bold  w-1/2">Start Learning <span className="text-[#B51B75]">Today</span> </h2>
                <p className=" my-7 text-start ">Begin your learning journey with our easy-to-follow courses. Dive into exciting topics and expand your horizons.</p>
                <div className="flex gap-5">
                <Link to="/techOn" className="btn bg-[#B51B75] hover:btn-outline hover:text-[#B51B75] border-none text-white">Tech On SkillPath</Link>
                <Link to="/allClasses" className="btn btn-outline text-[#FFC107]">
                Browse Classes
                <FaArrowRightLong /></Link>
                </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="">
                    <img src={girl3} className="w-full min-h-[700px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
       
       
        
      </Swiper>
            
        </div>
    );
};

export default Banner;