import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CommonBanner from "../../../../shared/CommonBanner/CommonBanner";


const AddClass = () => {
    const   {user,loading,setLoading} = useAuth()
    const {register,handleSubmit,reset,formState: { errors },} = useForm()
    const axiosSecure = useAxios()
    const navigate = useNavigate()

    const {mutateAsync,isPending} = useMutation({
        mutationFn : async(course) => {
            const {data :dat} = await axiosSecure.post("/classes",course)
            return dat
        },
        onSuccess : ()=> {
            setLoading(false)
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully add class for review",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/dashboard/my-class")
        }
      })

    const onSubmit = async(data) => {
        
        const formData = new FormData()
        formData.append('image', data.image[0])
       try{
        const {data : url} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,formData)
       
         if(url?.data?.display_url){
            const course = {
                title : data.title,
                name : user?.displayName,
                email : user?.email,
                price : data.price,
                description : data.description,
                status : "Pending",
                image : url?.data?.display_url
             }
             mutateAsync(course)
         }
       
       }
       catch (err){
         console.log(err)
       }
    }
    if(isPending || loading){
        return  <div className="flex max-w-screen h-screen items-center text-center justify-center">
        <progress className="progress w-56"></progress>
        </div>
    }
    return (
        <div >
          <CommonBanner title={`Add a new class`}/>
          
           <div className="flex gap-5 lg:px-10">
            <div className="w-1/2">

            </div>
           <div className="w-1/2 lg:pb-20 pb-16 mx-auto mt-20">
               <form onSubmit={handleSubmit(onSubmit)}>
                     
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Title</span>
                         </label>
                     <input type="text" {...register("title",{ required: true })} placeholder="Title"  className="input input-bordered" required />
                     {errors.title && <span className="text-red-600">This field is required</span>}
                    </div>  
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                         </label>
                     <input type="name" {...register("name")} placeholder="Your Name" value={user.displayName} disabled className="input input-bordered" required />
                    </div> 
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Email</span>
                         </label>
                     <input type="email" {...register("email")} placeholder="email" value={user.email} disabled className="input input-bordered" />
                    </div>  
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Price</span>
                         </label>
                     <input type="number" {...register("price")} placeholder="Price"  className="input input-bordered" />
                     {errors.price && <span className="text-red-600">This field is required</span>}
                    </div>  
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Description</span>
                         </label>
                    
                     <textarea placeholder="Short Description" {...register("description")} className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                     {errors.description && <span className="text-red-600">This field is required</span>}
                    </div>  
                  
                      <div className="from-control">
                      <label className="flex h-[48px] items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                            <input  {...register("image")}  name="image" type="file" />
                            {errors.image && <span className="text-red-600">This field is required</span>}
                        </label>
                       <input  className="mt-3 btn bg-[#0D6EFD] text-white  rounded-lg hover:bg-[#4d7fcc]" type="submit" value="Add class" />
                      </div>
                   
                  </form>
            </div>
           </div>
        </div>
    );
};

export default AddClass;