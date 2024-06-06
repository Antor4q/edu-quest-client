import { MdEmail } from "react-icons/md";
import group from "../../assets/group1.avif"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useAuth from "../../hooks/useAuth";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
    const {user} = useAuth()
    const {id} = useParams()
    const axiosSecure = useAxios()

     const {data} = useQuery({
        queryKey: ['class'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/classesDetail/${id}`)
            return data
        }
     })
    
    return (
        <div className=" min-h-screen ">
            <div className="bg-no-repeat text-white  h-[400px] backdrop-blur-md mb-16 hero  bg-center bg-cover" style={{backgroundImage: `url(${group})`}} >
                <div className="hero-overlay bg-opacity-70 bg-gray-900"></div>
                        <h2 className="text-5xl font-bold text-center">{data?.title}</h2>
                </div>
            <div className="lg:max-w-[1440px] lg:mb-10 flex gap-8 mx-auto">
              <div className="flex-1">
               <div className=" border p-10 rounded-xl mx-auto">
                    <img  className="w-full rounded-xl h-[500px] bg-cover" src={data?.image} alt="" />
                </div>
               
                 <div className="my-10">
                    <Tabs >
                        <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Teacher</Tab>
                        <Tab>Reviews</Tab>
                        </TabList>
                    
                        <TabPanel>
                            <div className="h-[400px] px-5 my-10 mx-auto">
                            <h2 className="text-2xl font-bold">About the course </h2>
                            <div className="mt-8">
                                <h3 className="text-4xl font-bold">{data?.title}</h3>
                                <p className="my-5">
                                    {data?.description}
                                    <br></br> Python is a versatile and beginner-friendly programming language known for its simplicity and readability. It is widely used in various fields such as web development, data analysis, artificial intelligence, scientific computing, and more. One of Python`s key features is its simple syntax, which is straightforward and resembles plain English, making it easy to learn and write. This readability makes it an excellent choice for beginners.</p>
                                
                            </div>
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="h-[400px]  flex gap-5 my-10 mx-auto">
                               <div className=" ">
                                  <img className="h-[300px] w-[300px]" src={user?.photoURL} alt="" />
                               </div>
                               <div className="bg-pink-100 flex flex-col justify-center h-[300px] rounded-lg p-10 w-full">
                               <p className="font-medium"> {data?.name}</p>
                                <p className="flex mt-2 items-center gap-2 font-medium"><MdEmail /> {data?.email}</p>
                                <div className="flex my-3 gap-4 text-2xl font-semibold">
                                    <a href="#"><FaFacebook></FaFacebook></a>
                                    <a href="#"><FaLinkedin></FaLinkedin></a>
                                    <a href="#"><FaInstagram></FaInstagram></a>
                                </div>
                               </div>
                            
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="h-[400px] my-10 mx-auto">
                            <h2 className="text-2xl font-bold">About the course </h2>
                           
                            </div>
                        </TabPanel>
                       
                    </Tabs>
                 </div>
              </div>
              <div className="w-[300px] rounded-lg p-5 border">
                  <div >
                     <ReactPlayer  width={'250px'} height={'220px'} controls url={'https://www.youtube.com/watch?v=5O5e0nnVulY'}></ReactPlayer>
                  </div>
                  <p className="text-2xl my-4 font-bold">${data?.price}</p>
                  <Link to={`/payment/${data?._id}`} className="btn text-white  btn-outline bg-pink-600">Pay Now</Link>
              </div>
            </div>
        </div>
    );
};

export default Details;