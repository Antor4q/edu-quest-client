import PropTypes from "prop-types"
import useAxios from "../../../../hooks/useAxios";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const MyClassModal = () => {
   const {id} = useParams()
   const axiosSecure = useAxios()
   const {register,handleSubmit} = useForm()
   const [toggle,setToggle] = useState(true)
   const [link,setLink] = useState("")
   
   const {user} = useAuth()
   
   const {data,refetch,isPending} = useQuery({
    queryKey: ['class'],
    queryFn: async()=>{
      const {data} = await axiosSecure.get(`/classesDetail/${id}`)
      return data
    }
   })
   
    const { title ,name, email, price, description,image,_id,status} = data;
   
 
    const onSubmit = async(data) => {
      
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
    if(isPending){
      return <span className="font-bold text-4xl text-center">Loading...</span>
   }
    return (
      
     <div>
           <div className="w-3/5 mx-auto  mt-10">
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
    );
};

export default MyClassModal;
MyClassModal.propTypes = {
    cla : PropTypes.object,
    refetch : PropTypes.func
}