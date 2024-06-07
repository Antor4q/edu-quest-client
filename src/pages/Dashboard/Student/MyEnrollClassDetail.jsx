import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import TitleSection from "../../../shared/TitleSection/TitleSection";
import MyEnrollClassRow from "./MyEnrollClassRow";
import FeedbackModal from "./FeedbackModal";



const MyEnrollClassDetail = () => {
    const axiosSecure  = useAxios()
     const {id} = useParams()
   
    
    const {data} = useQuery({
        queryKey : ['assignment'],
        queryFn : async()=>{
            const {data} = await axiosSecure.get(`/assignments/${id}`)
            return data
        }
    })
   
    return (
        <div>
            <TitleSection subHeading={'Assignments'} heading={`All assignments for ${data?.classTitle}`}></TitleSection>

            <div className="lg:w-3/4  mx-auto">
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-outline text-pink-600">Teaching Evaluation Report</button>
            <FeedbackModal id={id}/>
            </div>
            <div className="lg:w-3/4 p-10 mt-10 rounded-lg bg-base-200  lg:mx-auto">
              
            <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Action</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                         {
                            data?.map((assignment,index) => <MyEnrollClassRow assignment={assignment} index={index} key={assignment?._id}></MyEnrollClassRow>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrollClassDetail;