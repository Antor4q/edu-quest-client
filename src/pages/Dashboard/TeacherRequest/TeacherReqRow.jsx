import PropTypes from "prop-types"
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";



const TeacherReqRow = ({teacher,index,refetch}) => {
    const { name ,image , experience,category, title,status,_id,email} = teacher;
    const axiosSecure = useAxios()
   

    const handleTeacher = async(id,status) => {
        const teacherData = {
            role : 'Teacher',
            email : email,
            status : status
        }
      
        const {data} = await axiosSecure.patch(`/teachers/${id}`,teacherData)
        
        if(data?.result1?.modifiedCount > 0 && data?.result2?.modifiedCount > 0){
         
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully Accepted this user",
                showConfirmButton: false,
                timer: 1500
              });
           
        }
        if(data.modifiedCount > 0){
           
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully Rejected this user",
                showConfirmButton: false,
                timer: 1500
              });
        }
       
    }

  
    return (
       <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td> <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="User" />
                    </div>
                    </div></td>
            <td>{experience}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td><span className={`${status === 'Accepted' && 'bg-green-600' } ${status === 'Rejected' && 'bg-red-600'} ${status === 'Pending' && 'bg-yellow-500'}  text-white px-4 py-2  rounded-lg`}>{status}</span></td>
            <td><button disabled={status !== 'Pending'} onClick={()=>handleTeacher(_id,'Accepted')} className={`${status !== 'Pending'  ? 'bg-pink-300' : 'bg-pink-600'} text-white px-4 py-2  rounded-lg`}>Approved</button></td>
            <td><button disabled={status !== 'Pending'} onClick={()=>handleTeacher(_id, 'Rejected')} className={`${status !== 'Pending' ? 'bg-red-300' : 'bg-red-600'} text-white px-4 py-2  rounded-lg`}>Reject</button></td>
       </tr>
    );
};

export default TeacherReqRow;
TeacherReqRow.propTypes = {
    teacher : PropTypes.object,
    index : PropTypes.index,
    refetch: PropTypes.func
}