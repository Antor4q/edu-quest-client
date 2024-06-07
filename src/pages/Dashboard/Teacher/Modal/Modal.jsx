import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";
import PropTypes from "prop-types"

const Modal = ({setCount,count,data:dat}) => {
    const {register,handleSubmit,reset,formState: { errors },} = useForm()
    const axiosSecure = useAxios()
  
    const {mutateAsync} = useMutation({
        mutationKey: ['assignment'],
        mutationFn : async(assignment)=>{
            const {data} = await axiosSecure.post("/assignments",assignment)
            return data
        },
        onSuccess : ()=>{
            reset()
            setCount(count + 1)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully added a assignment",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

    const onSubmit = data => {
        const assignment = {
            title : data.title,
            description : data.description,
            deadline : data.deadline,
            classId : dat?._id,
            classTitle : dat?.title
        }
        mutateAsync(assignment)
    }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold  text-lg">Hey!</h3>
                <p className="py-4">Create a new Assignment</p>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                         <label className="label">
                            <span className="label-text">Title</span>
                            </label>
                          <input type="text" {...register("title",{ required: true })} placeholder="Title"  className="input input-bordered" required />
                         {errors.title && <span className="text-red-600">This field is required</span>}
                        </div> 
                        <div className="form-control w-full">
                         <label className="label">
                            <span className="label-text">Deadline</span>
                            </label>
                          <input type="text" {...register("deadline",{ required: true })} placeholder="Deadline"  className="input input-bordered" required />
                         {errors.title && <span className="text-red-600">This field is required</span>}
                        </div> 
                           <div className="form-control w-full">
                             <label className="label">
                                <span className="label-text">Description</span>
                                </label>
                            
                             <textarea placeholder="Short Description" {...register("description")} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                             {errors.description && <span className="text-red-600">This field is required</span>}
                            </div>  
                            <input  className="mt-3 btn bg-pink-500 text-white  rounded-lg hover:bg-pink-400" type="submit" value="Add assignment" />
                    </form>
                </div>
            </div>
            </dialog>
    );
};

export default Modal;
Modal.propTypes = {
    setCount : PropTypes.func,
    count : PropTypes.number,
    data : PropTypes.object
}