import { useEffect, useState } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import TitleSection from "../../../shared/TitleSection/TitleSection";
import { RiFeedbackFill } from "react-icons/ri";

const Reviews = () => {
     const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch("/reviews.json")
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])
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
                reviews?.map(item=> <>
                    <SwiperSlide className="rounded-xl">
                    <div className="card border  hover:shadow-lg  bg-none ">
                      <div className="avatar flex pt-7 justify-center">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        </div>
                    <div className="card-body py-2 min-h-[212px]  max-h-[213px] items-center ">
                        <h2 className="card-title text-center">{item.Name}</h2>
                        <p className="text-start">{`"${item.Feedbacktext}"`}</p>
                        <div className="py-2 border-t-2 border-black w-full">
                            <h2 className="text-xl font-semibold text-start">{item.Title}</h2>
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