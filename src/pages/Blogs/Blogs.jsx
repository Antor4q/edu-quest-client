import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Blog from "./Blog";
import Blg from "./Blg";


const Blogs = () => {
   
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
   console.log(data.slice(0,1))

    return (
        <div className="min-h-screen lg:max-w-[1440px] px-5 my-10 mx-auto pt-4">
            <div className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                   {
                    data.slice(0,1).map((blog,index)=><Blg key={index} blog={blog} />)
                   }
                    <div className="grid  grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      
                         {
                            data.slice(1).map((blog,index)=><Blog key={index} blog={blog} />)
                         }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Blogs;