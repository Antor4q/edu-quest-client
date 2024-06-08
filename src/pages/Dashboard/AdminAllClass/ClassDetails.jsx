import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import group from "../../../assets/group1.avif"
import { MdEmail } from "react-icons/md";
import DetailsRev from "../../AllClasses/DetailsRev";

const ClassDetails = () => {
    const id = useParams()
    const axiosSecure = useAxios()

     const {data,isPending} = useQuery({
        queryKey: ['class'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/classesDetail/${id.id}`)
            return res
        }
     })

   const classTitle = data?.data?.title 
     const {data:feedback,isPending:titleLoad} = useQuery({
        queryKey: ['feedback'],
        queryFn: async()=>{
            const {data:feed} = await axiosSecure.get(`/feedbackRev/${classTitle}`)
            return feed
        }
    })
   
    if(isPending || titleLoad){
        return  <>
        <div className="flex max-w-screen h-screen items-center text-center justify-center">
        <progress className="progress w-56"></progress>
        </div>
        </>
    }
    
    return (
        <div className="pb-20">
            <div>
                <div className="bg-no-repeat text-white  h-[400px] backdrop-blur-md mb-16 hero  bg-center bg-cover" style={{backgroundImage: `url(${group})`}} >
                <div className="hero-overlay bg-opacity-70 bg-gray-900"></div>
                        <h2 className="text-5xl font-bold text-center">{data?.data.title}</h2>
                </div>
                <div className="w-2/3 border p-10 rounded-xl mx-auto">
                    <img  className="w-full rounded-xl h-[500px] bg-cover" src={data?.data.image} alt="" />
                </div>
                <div className="w-2/3 my-10 mx-auto">
                    <h2 className="text-2xl font-bold">About the course <span className="ml-5 text-4xl ">${data?.data.price}</span></h2>
                    <div className="mt-8">
                        <h3 className="text-4xl font-bold">{data?.data.title}</h3>
                        <p className="my-5">{data?.data.description}<br></br> Python is a versatile and beginner-friendly programming language known for its simplicity and readability. It is widely used in various fields such as web development, data analysis, artificial intelligence, scientific computing, and more. One of Python`s key features is its simple syntax, which is straightforward and resembles plain English, making it easy to learn and write. This readability makes it an excellent choice for beginners.</p>
                        <p className="font-medium">By {data?.data.name}</p>
                        <p className="flex mt-2 items-center gap-2 font-medium"><MdEmail /> {data?.data.email}</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-5">Learners feedback</h2>
                        <DetailsRev data={feedback}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ClassDetails;