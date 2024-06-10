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
        <div  className="md:h-[500px] lg:h-[700px]" >
            
            
           
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
          <div className="w-screen h-[400px] md:h-full bg-cover bg-no-repeat" style={{backgroundImage : 'url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_2_1.png)'}}>

          <div className="flex md:flex-row flex-col pt-20 md:pt-0 px-5 md:pr-0 lg:px-0 items-center justify-center md:items-start  bg-none bg-transparent md:justify-between lg:max-w-[1440px] mx-auto">
                  <div className="lg:w-1/2  md:w-2/3 lg:min-h-[700px] md:min-h-[500px]   md:text-start  flex flex-col justify-center">
                    <h2 className="md:text-6xl text-3xl  md:text-start  font-bold  lg:w-1/2">Hey! Lets Start With <span className="text-[#0D6EFD]">EduQuest</span> </h2>
                    <p className=" lg:my-7 md:text-start ">Explore our collection of courses to learn new skills. Start your journey towards personal and professional growth today!</p>
                    <div className="flex mt-5 justify-center lg:justify-start lg:mt-0 gap-2 md:gap-5">
                      <Link to="/techOn" className="btn btn-sm bg-[#0D6EFD] hover:btn-outline hover:text-[#0D6EFD] border-none text-white">Tech On SkillPath</Link>
                      <Link to="/allClasses" className="btn btn-sm btn-outline text-[#FFC107]">
                      Browse Classes
                      <FaArrowRightLong /></Link>
                      </div>
                      </div>
                  <div className="w-1/2  hidden md:flex h-full">
                      <div className="">
                      <img src={girl1} className="w-full  hidden md:flex md:min-h-[500px] lg:min-h-[700px]" alt="" />
                      </div>
                  </div>
              </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen h-[400px] md:h-full bg-cover bg-no-repeat" style={{backgroundImage : 'url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_2_1.png)'}}>

          <div className="flex md:flex-row flex-col pt-20 md:pt-0 px-5 md:pr-0 lg:px-0 items-center justify-center md:items-start  bg-none bg-transparent md:justify-between lg:max-w-[1440px] mx-auto">
                  <div className="lg:w-1/2  md:w-2/3 lg:min-h-[700px] md:min-h-[500px]   md:text-start  flex flex-col justify-center">
                    <h2 className="md:text-6xl text-3xl  md:text-start  font-bold  lg:w-1/2">Learn Anywhere, <span className="text-[#0D6EFD]">Anytime</span> </h2>
                    <p className=" lg:my-7 md:text-start ">Access our diverse courses at your convenience. Learn at your own pace and empower yourself with knowledge.</p>
                    <div className="flex mt-5 justify-center lg:justify-start lg:mt-0 gap-2 md:gap-5">
                      <Link to="/techOn" className="btn btn-sm bg-[#0D6EFD] hover:btn-outline hover:text-[#0D6EFD] border-none text-white">Tech On SkillPath</Link>
                      <Link to="/allClasses" className="btn btn-sm btn-outline text-[#FFC107]">
                      Browse Classes
                      <FaArrowRightLong /></Link>
                      </div>
                      </div>
                  <div className="w-1/2  hidden md:flex h-full">
                      <div className="">
                      <img src={girl2} className="w-full  hidden md:flex md:min-h-[500px] lg:min-h-[700px]" alt="" />
                      </div>
                  </div>
              </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="w-screen h-[400px] md:h-full bg-cover bg-no-repeat" style={{backgroundImage : 'url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_2_1.png)'}}>

          <div className="flex md:flex-row flex-col pt-20 md:pt-0 px-5 md:pr-0 lg:px-0 items-center justify-center md:items-start  bg-none bg-transparent md:justify-between lg:max-w-[1440px] mx-auto">
                  <div className="lg:w-1/2  md:w-2/3 lg:min-h-[700px] md:min-h-[500px]   md:text-start  flex flex-col justify-center">
                    <h2 className="md:text-6xl text-3xl  md:text-start  font-bold  lg:w-1/2">Start Learning <span className="text-[#0D6EFD]">Today</span> </h2>
                    <p className=" lg:my-7 my-5 md:text-start ">Begin your learning journey with our easy-to-follow courses. Dive into exciting topics and expand your horizons.</p>
                    <div className="flex mt-5 justify-center lg:justify-start lg:mt-0 gap-2 md:gap-5">
                      <Link to="/techOn" className="btn btn-sm bg-[#0D6EFD] hover:btn-outline hover:text-[#0D6EFD] border-none text-white">Tech On SkillPath</Link>
                      <Link to="/allClasses" className="btn btn-sm btn-outline text-[#FFC107]">
                      Browse Classes
                      <FaArrowRightLong /></Link>
                      </div>
                      </div>
                  <div className="w-1/2  hidden md:flex h-full">
                      <div className="">
                      <img src={girl3} className="w-full  hidden md:flex md:min-h-[500px] lg:min-h-[700px]" alt="" />
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