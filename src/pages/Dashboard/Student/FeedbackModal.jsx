import PropTypes from "prop-types"
import ReactStars from "react-rating-stars-component";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
const FeedbackModal = ({id}) => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const [rating, setRating] = useState(null)
    const {register,handleSubmit,reset,formState: { errors },} = useForm()
    const {data:dat} = useQuery({
        queryKey : ['title'],
        queryFn : async()=>{
            const {data} = await axiosSecure.get(`/enrolledTitle/${id}`)
            return data
        }
    })
     
    const {mutateAsync} = useMutation({
        mutationKey : ['feedback'],
        mutationFn : async(feedback)=>{
            const {data} = await axiosSecure.post("/feedback",feedback)
            return data
        },
        onSuccess : ()=>{
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `You have successfully giving a feedback `,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
   
    
    const onSubmit = data => {
        const feedback = {
            description : data.description,
            name : user?.displayName,
            image : user?.photoURL,
            rating : rating,
            classTitle : dat?.title
        }
        console.log(feedback)
        mutateAsync(feedback)
    }

    return (
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hey! {user?.displayName}</h3>
    <p className="py-4">Give your valuable feedback</p>
    <div>
        <form onSubmit={handleSubmit(onSubmit)}> 
             <div className="flex justify-center">
                <ReactStars
                        count={5}
                        onChange={setRating}
                        size={30}
                        activeColor="#ffd700"
                    />,
             </div>
             <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                 </label>
                 <textarea placeholder="Short Description" {...register("description")} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                  {errors.description && <span className="text-red-600">This field is required</span>}
            </div>  
            <input  className="mt-3 btn bg-pink-500 text-white  rounded-lg hover:bg-pink-400" type="submit" value="Send" />
        </form>
    </div>
  </div>
</dialog>
    );
};

export default FeedbackModal;
FeedbackModal.propTypes = {
    id : PropTypes.string
}