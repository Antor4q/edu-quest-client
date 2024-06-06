import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import TitleSection from "../../shared/TitleSection/TitleSection";
import { PiVideoConferenceDuotone } from "react-icons/pi";
import Card from "./Card";


const AllClasses = () => {
    const axisPublic = useAxios()
    const status = 'Accepted'
    const {data} = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const {data} = await axisPublic.get(`/classes/${status}`)
            return data
        }
    })
  
    return (
        <div className="max-w-[1420px] min-h-screen  mx-auto">
            <TitleSection icon={<PiVideoConferenceDuotone />} subHeading={'All classes'} heading={'Find Your Next Course'}></TitleSection>
            <p className="w-3/5 mx-auto text-center">Browse all available classes in one place. Whether you`re just starting or looking to advance, you`ll find courses that fit your needs. Filter by category, level, or teacher to find the right class for you and start learning today.</p>
            <div className="grid my-16 grid-cols-3 gap-10">
                {
                    data?.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default AllClasses;