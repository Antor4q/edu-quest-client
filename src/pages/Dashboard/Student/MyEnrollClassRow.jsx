import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types"
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
const MyEnrollClassRow = ({assignment,index}) => {
    const axiosSecure = useAxios()

    const {mutateAsync} = useMutation({
        mutationKey: ['assignmentSubmit'],
        mutationFn : async(submitData)=>{
            const {data} = await axiosSecure.post("/submitAssignment",submitData)
            return data
        },
        onSuccess : ()=> {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `You have successfully submitted `,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
    const handleSubmit = assignment => {
         mutateAsync(assignment)
         
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{assignment?.title}</td>
            <td>{assignment?.description}</td>
            <td>{assignment?.deadline}</td>
            <td>
                <button onClick={()=> handleSubmit(assignment)} className="btn btn-outline bg-pink-500  text-white">Submit</button>
            </td>
        </tr>
    );
};

export default MyEnrollClassRow;
MyEnrollClassRow.propTypes = {
    assignment : PropTypes.object,
    index : PropTypes.index
}