import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import TitleSection from "../../../shared/TitleSection/TitleSection";
import { FaUsersCog } from "react-icons/fa";
import TeacherReqRow from "./TeacherReqRow";


const TeacherRequest = () => {
    const axiosSecure = useAxios()

    const {data,refetch} = useQuery({
        queryKey: ['teachers'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/teachers")
            return res
        }
    })
    console.log(data?.data)
    return (
        <div>
           
            <TitleSection icon={<FaUsersCog />} subHeading={'Teacher Request'} heading={'Overview of All Requested Teachers'}></TitleSection>
            <div className=" p-10 mt-10 rounded-lg bg-base-200  lg:mx-8">
                
                <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Experience</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                          {
                            data?.data?.map((teacher,index) => <TeacherReqRow key={teacher._id} refetch={refetch} teacher={teacher} index={index}></TeacherReqRow>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherRequest;