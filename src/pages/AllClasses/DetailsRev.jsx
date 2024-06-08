
import PropTypes from "prop-types"
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';


const DetailsRev = ({data}) => {
    return (
        <div className="w-[400px]">
        <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        
        navigation={true}
        modules={[Pagination, Navigation]}
  >
    
     
    {
            data?.map(item=> <>
                <SwiperSlide className="rounded-xl">
                <div className="card border  hover:shadow-lg  bg-none ">
                  <div className="avatar flex pt-7 justify-center">
                    <div className="w-24 rounded-full">
                        <img src={item?.image} />
                    </div>
                    </div>
                <div className="card-body py-2 min-h-[212px]  max-h-[213px] items-center ">
                    <h2 className="card-title text-center">{item.name}</h2>
                    <p className="text-start">{item?.description.slice(0,110)}</p>
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
    );
};

export default DetailsRev;
DetailsRev.propTypes = {
    data : PropTypes.array
}