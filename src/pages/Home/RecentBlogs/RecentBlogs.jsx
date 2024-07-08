import { FaBlog } from "react-icons/fa";
import TitleSection from "../../../shared/TitleSection/TitleSection";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReBlog from "./ReBlog";



const RecentBlogs = () => {

    const axiosPublic = useAxiosPublic()
    const {data,isPending} = useQuery({
        queryKey: ['blogs'],
        queryFn: async()=>{
            const {data} = await axiosPublic.get("/blogs")
            return data
        }
    })
     
    if(isPending){
        return <>
        <div className="flex max-w-screen h-screen items-center text-center justify-center">
        <progress className="progress w-56"></progress>
        </div>
        </>
    }
    return (
        <div className="lg:max-w-[1440px] lg:mx-auto my-10 px-5 lg:px-0">
            <TitleSection subHeading={"Recent blogs"} icon={<FaBlog/>} heading={"Explore our blogs"}/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
                {
                    data.slice(0,6).map((blog,index) => <ReBlog key={index} blog={blog}/>)
                }

            </div>
        </div>
    );
};

export default RecentBlogs;