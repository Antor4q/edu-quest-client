
import TitleSection from "../../../shared/TitleSection/TitleSection";

import Card from "./Card";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";



const MyEnrollClass = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const {data} = useQuery({
        queryKey : ['myEnrolledClasses'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/myEnrolled/${user?.email}`)
            return data
        }
    })
   console.log(data)
    return (
        <div>
            <TitleSection subHeading={"Enrolled Classes"} heading={"Hey! Your all enrolled class here"}></TitleSection>
             {
                data?.length < 1 && <div className="flex mt-20  w-4/6 mx-auto flex-col items-center justify-center">
                        <div>
                        <h2 className="text-3xl font-bold">Oops! You have not enrolled<br></br> in any class</h2>
                        <Link to="/allClasses" className="btn btn-outline bg-pink-600 text-white mt-5">Go to enroll an a class <FaArrowCircleRight></FaArrowCircleRight></Link>
                        </div>
                </div>
             }
            {
                data?.length > 0 && <>
                
                <div className="grid grid-cols-3 gap-8 w-5/6 mx-auto">
                {
                    data?.map( item => <Card key={item._id} item={item}></Card>)
                }
            </div>
                </>
            }
        </div>
    );
};

export default MyEnrollClass;