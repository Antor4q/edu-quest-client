import PropTypes from "prop-types"
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const AdminACRow = ({cla,index,refetch}) => {
    const {title,image, description,status,email,_id} = cla
    const axiosSecure = useAxios()

    const handleClass = async(id,status) => {
        
        const data = {
            status : status
        }
        const res =await axiosSecure.patch(`/classes/${id}`,data)
        console.log(res.data)
        if(res?.data.result1?.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `You have successfully ${title} Accepted `,
                showConfirmButton: false,
                timer: 1500
              });
        }
        if(res?.data.result2?.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `You have successfully ${title} Rejected `,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <tr>
         <td>{index + 1}</td>
         <td>{title}</td>
         <td>
            <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="class" />
                    </div>
            </div>
         </td>
         <td>{email}</td>
         <td title={description?.slice(41)}>{description?.slice(0,40)}...</td>
         <td><button  
            onClick={()=>handleClass(_id, 'Accepted')}
            disabled={status !== 'Pending'}  
             className={`${status !== 'Pending'  ? 'bg-pink-300' : 'bg-pink-600'} text-white px-4 py-2  rounded-lg`}>{status === 'Pending' ? 'Approved':'Accepted'}</button></td>

            <td><button 
                onClick={()=>handleClass(_id, 'Rejected')}
                disabled={status !== 'Pending'} 
                className={`${status !== 'Pending' ? 'bg-red-300' : 'bg-red-600'} text-white px-4 py-2  rounded-lg`}>{status === 'Rejected' ? 'Rejected':'Reject'}</button></td>
         <td><button
            disabled={status !== 'Accepted'}
            className={`${status !== 'Accepted' ? 'bg-gray-200 ' : 'bg-green-600 text-white'}  px-4 py-2  rounded-lg`}>See progress</button></td>
        
        </tr>
    );
};

export default AdminACRow;
AdminACRow.propTypes = {
    cla : PropTypes.object,
    index : PropTypes.index,
    refetch : PropTypes.func
}