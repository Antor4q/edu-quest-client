
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import TitleSection from "../../../shared/TitleSection/TitleSection";
import { RiFeedbackFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Reviews = () => {
   
     const axiosPublic = useAxiosPublic()
   

    const {data,isPending} = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async()=> {
            const {data} = await axiosPublic.get("/feedback")
            return data
        }
    })
    
    if(isPending){
        return   <>
        <div className="flex max-w-screen h-screen items-center text-center justify-center">
        <progress className="progress w-56"></progress>
        </div>
        </>
    }
    return (
       <div className="bg-base-200 my-20 py-5">
             <div className="lg:max-w-[1440px]  my-10 mx-auto pt-4">
                <TitleSection icon={<RiFeedbackFill />} heading={'What Our Learners Say'} subHeading={'Learners Feedback'}></TitleSection>
       
        <div>
            <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            
            navigation={true}
            modules={[Pagination, Navigation]}
      >
        
         
        {
                data?.map(item=> <>
                    <SwiperSlide key={item?._id} className="rounded-xl">
                    <div className="card border  hover:shadow-lg  bg-none ">
                      <div className="avatar flex pt-7 justify-center">
                        <div className="w-24 rounded-full">
                            <img src={item?.image} />
                        </div>
                        </div>
                    <div className="card-body py-2 min-h-[212px]  max-h-[213px] items-center ">
                        <h2 className="card-title text-center">{item.name}</h2>
                        <p className="text-start">{item?.description.slice(0,150)}</p>
                        <div className="py-2 border-t-2 border-black w-full">
                            <h2 className="text-xl font-semibold text-start">{item.classTitle}</h2>
                        </div>
                    </div>
                    </div>
                    </SwiperSlide>
                     
                </>)
            }
       
      </Swiper>
        </div>
        
       
    </div>
       </div>
    );
};

export default Reviews;