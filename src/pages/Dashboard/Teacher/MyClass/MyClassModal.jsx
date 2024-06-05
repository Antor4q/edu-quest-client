import PropTypes from "prop-types"
import useAxios from "../../../../hooks/useAxios";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const MyClassModal = ({cla,refetch}) => {
  console.log(cla)
    const { title ,name, email, price, description,image,_id,status} = cla;
    const {register,handleSubmit} = useForm()
    const [toggle,setToggle] = useState(true)
    const [link,setLink] = useState("")
    const axiosSecure = useAxios()
    const {user} = useAuth()
 
    const onSubmit = async(data) => {
       console.log(data)
        try{
            if(data?.image?.length > 0){
                const formData = new FormData()
                formData.append('image', data.image[0])
                const {data : url} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,formData)
                setLink(url?.data?.display_url)
            }
            const course = {
                title : data.title,
                name : name,
                email : email,
                price : data.price,
                description : data.description,
                image : link  ?  link : image,
                status : status
               
            }
            const res = await axiosSecure.put(`/classes/${_id}`,course)
            if(res?.data?.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  }); 
            }
        }
        catch (err){
            // 
            console.log(err)
        }
      
    }
    return (
      
    <>
     <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
        <form method="dialog">
       
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
            <div className="  mt-10">
               <form onSubmit={handleSubmit(onSubmit)}>
                     
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Title</span>
                         </label>
                     <input type="text" {...register("title")} defaultValue={title} placeholder="Title"  className="input input-bordered" required />
                     
                    </div>  
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                         </label>
                     <input type="name" {...register("name")} placeholder="Your Name" value={user?.displayName} disabled className="input input-bordered" required />
                    </div> 
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Email</span>
                         </label>
                     <input type="email" {...register("email")} placeholder="email" value={user?.email} disabled className="input input-bordered" />
                    </div>  
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Price</span>
                         </label>
                     <input type="number" {...register("price")} defaultValue={price} placeholder="Price"  className="input input-bordered" />
                   
                    </div>  
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Description</span>
                         </label>
                    
                     <textarea placeholder="Short Description" defaultValue={description} {...register("description")} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                   
                    </div>  
                  
                      <div className="from-control">
                      <label onClick={()=>setToggle(false)} className="flex h-[48px] items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                            {toggle ? <span>{image}</span> :
                            <input  {...register("image")}   name="image" type="file" />}
                            
                        </label>
                       
                       <input  className="mt-3 btn bg-pink-500 text-white  rounded-lg hover:bg-pink-400" type="submit" value="Update class" />
                      </div>
                   
                  </form>
            </div>
       </div>
     </dialog></>

    );
};

export default MyClassModal;
MyClassModal.propTypes = {
    cla : PropTypes.object,
    refetch : PropTypes.func
}