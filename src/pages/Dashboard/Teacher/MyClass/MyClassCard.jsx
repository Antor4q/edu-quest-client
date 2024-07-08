import PropTypes from "prop-types"
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";

import { Link } from "react-router-dom";


const MyClassCard = ({cla,refetch,isPending}) => {
    const { title ,name, email, price, description, status, image,_id} = cla;
    const axiosSecure = useAxios()
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be delete ${title} class!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/classes/${id}`)
              if(res?.data?.deletedCount > 0){
                    refetch()
                       Swal.fire({
                      title: "Deleted!",
                      text: `${title}  has been deleted.`,
                      icon: "success",
                      timer: 1500
              });
                }
            }
          });
    }


    if(isPending){
        return <span className="font-bold text-4xl text-center">Loading...</span>
    }
    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src={image} alt="Article"/>

        <div className="p-6">
            <div>
                <div className="flex gap-5 items-center">
                <span className="text-xs font-medium bg-yellow-500  bg-opacity-50 px-2 py-1 rounded-lg  uppercase dark:text-blue-400">{status}</span>
                <p className="text-3xl font-bold">${price}</p>
                </div>
                <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 "  role="link">{title}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>

            <div className="mt-4">
                <div className="flex items-center">
                    <div className="flex items-center">
                      
                        <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{name}</p>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{email}</span>
                </div>
                <div className="flex items-center mt-4 justify-evenly">
                        <Link  to={`/dashboard/my-class/${_id}`} disabled={status !== 'Accepted'} className="btn text-lgbtn-outline bg-green-500 text-white items-center gap-3"><FaEye></FaEye>See details</Link>

                        <Link to={`/dashboard/my-classUpdate/${cla?._id}`} className="btn  btn-outline bg-[#0D6EFD] text-white items-center gap-3"><FaEdit></FaEdit>Update</Link>
                        

                        <button onClick={()=> handleDelete(_id)} className="btn btn-outline  bg-red-500 text-white items-center gap-3"><MdDelete></MdDelete>Delete</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyClassCard;
MyClassCard.propTypes = {
    cla : PropTypes.object,
    refetch  : PropTypes.func,
    isPending : PropTypes.bool
}