import { GrUserAdmin } from "react-icons/gr";

import PropTypes from "prop-types"
import { TiUserDelete } from "react-icons/ti";

import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";

const UsersRow = ({user,index}) => {
    const axiosSecure = useAxios()
    const [loading,setLoading] = useState(false)
  

    const handleMakeAdmin = async(id) => {

        const role = {
            role : 'Admin'
        }
        setLoading(true)
        const {data} = await axiosSecure.patch(`/users/${id}`,role)
        
        if(data.modifiedCount){
            setLoading(false)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully make admin this user",
                showConfirmButton: false,
                timer: 1500
              });
        }
       
    }

    const handleDelete = id => {
        console.log(id)
    }
    if(loading){
        return <span className="text-5xl font-bold text-center animate-ping">Loading...</span>
    }
    return (
        <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                 {user.name}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>handleMakeAdmin(user._id)} disabled={user.role === 'Admin'} className="btn text-white bg-pink-500 text-xl font-medium"><GrUserAdmin /></button>
                </td>
                <td>
                    <button onClick={()=>handleDelete(user._id)} className="btn text-white bg-red-600 text-xl font-medium"><TiUserDelete /></button>
                </td>
          </tr>
    );
};

export default UsersRow;
UsersRow.propTypes = {
    user : PropTypes.object,
    index : PropTypes.number
}