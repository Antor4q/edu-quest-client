import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css';
import { useEffect, useState } from "react";
import { Navigation, Pagination } from 'swiper/modules';

import { GoStarFill } from 'react-icons/go';
import { HiUserGroup } from 'react-icons/hi';
import TitleSection from '../../../shared/TitleSection/TitleSection';
import { FaBook } from 'react-icons/fa6';


const PopularClasses = () => {
   const [data,setData] = useState([])
   useEffect(()=>{
     fetch("/popular.json")
     .then(res => res.json())
     .then(data => {
       setData(data)
     })
   },[])
     return (
        <div className="lg:max-w-[1440px]  my-10 mx-auto pt-4">
            <TitleSection subHeading={"Popular Classes"} heading={"Our Popular Classes"} icon={<FaBook></FaBook>}></TitleSection>
            <div>
                <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={4}
                
                navigation={true}
                modules={[Pagination, Navigation]}
          >
            
              {data?.map(item => <>
              
                <SwiperSlide>
              <div className="w-full z-10 mb-5 text-start max-w-[300px] max-h-[400px]  overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover object-center w-full max-h-[200px] min-h-[200px]" src={item.image} alt="avatar"/>

                    <div className="flex items-center px-6 py-1 bg-gray-900">
                        

                        <h1 className="mx-3 text-lg font-semibold text-white">${item.price}</h1>
                    </div>

                    <div className="px-6 py-2 min-h-[104px]  max-h-[105px]">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h1>

                       

                       <div className='flex justify-evenly'>
                       <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <GoStarFill />

                            <h1 className="px-2 text-sm"><span>{item.review.rating}</span></h1>
                        </div>

                        <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                           <HiUserGroup />

                            <h1 className="px-2 text-sm">{item.total_enrollment}</h1>
                        </div>
                       </div>

                        
                    </div>
                </div>
          </SwiperSlide>
              </>)}
           
          </Swiper>
            </div>
           
        </div>
    );
};

export default PopularClasses;