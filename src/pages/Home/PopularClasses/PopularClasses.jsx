import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';


import TitleSection from '../../../shared/TitleSection/TitleSection';
import { FaBook } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const PopularClasses = () => {
  
   const axiosPublic = useAxiosPublic()
  

   const {data:popularClasses,isPending} = useQuery({
    queryKey : ['popular classes'],
    queryFn: async()=>{
      const {data} = await axiosPublic.get("/popular")
      return data
    }
   })
  if(isPending){
    return  <>
    <div className="flex max-w-screen h-screen items-center text-center justify-center">
    <progress className="progress w-56"></progress>
    </div>
    </>
  }
     return (
      
        <>
         <div className='relative'>
             {/* <img className='animate-spin -left-10 absolute' src="https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/shape_2_1.png" alt="" /> */}
          </div>
         <div className="lg:max-w-[1440px] px-5 my-10 mx-auto pt-4">
         
            <TitleSection subHeading={"Popular Classes"} heading={"Our Popular Classes"} icon={<FaBook></FaBook>}></TitleSection>
            <div>
                <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={
                  window.innerWidth <= 550
                    ? 1
                    : window.innerWidth <= 720
                    ? 2
                    : window.innerWidth > 720
                    ? 3
                    : 0
                }
                
                navigation={true}
                modules={[Pagination, Navigation]}
          >
            
              {popularClasses?.map(item => <>
              
                <SwiperSlide key={item?._id}>
              <div className="w-full z-10 mb-5  text-start max-w-[350px] max-h-[400px]  overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover object-center w-full max-h-[200px] min-h-[200px]" src={item?.image} alt="avatar"/>

                    <div className="flex items-center px-6 py-1 bg-gray-900">
                        

                        <h1 className="mx-3 text-lg font-semibold text-white">${item?.price}</h1>
                    </div>

                    <div className="px-6 py-2 min-h-[104px]  max-h-[105px]">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{item?.title}</h1>
                        <p>{item?.description.slice(0,50)}</p>
                       

                       

                        
                    </div>
                </div>
          </SwiperSlide>
              </>)}
           
          </Swiper>
            </div>
           
        </div>
        </>
    );
};

export default PopularClasses;