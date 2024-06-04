import {  FaVideo } from "react-icons/fa";
import TitleSection from "../../../shared/TitleSection/TitleSection";
import AdminACRow from "./AdminACRow";
import useClasses from "../../../hooks/useClasses";


const AdminAllClass = () => {
    const [data,refetch] = useClasses()
   
    return (
        <div>
           
        <TitleSection icon={<FaVideo />} subHeading={'All classes'} heading={'Overview of All Classes'}></TitleSection>
        <div className=" p-8 mt-10 rounded-lg bg-base-200 mx-8 ">
            
            <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                        <th>
                           
                        </th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Short description</th>
                        
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        data?.data?.map((cla,index) =>  <AdminACRow key={cla._id} cla={cla} refetch={refetch} index={index}></AdminACRow>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default AdminAllClass;