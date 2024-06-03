import { FaChalkboardTeacher } from "react-icons/fa";
import TitleSection from "../../shared/TitleSection/TitleSection";
import group from "../../assets/group1.avif"
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const TechOnSkillPath = () => {
    const {user} = useAuth()
    const axiosPublic = useAxios()
    const {register,handleSubmit,formState: { errors },} = useForm()

    const {mutateAsync} = useMutation({
        mutationFn : async(teacher) => {
            const {data :dat} = await axiosPublic.post("/teachers",teacher)
            return dat
        },
        onSuccess : ()=> {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully submit for review",
                showConfirmButton: false,
                timer: 1500
              });
        }
      })

    const onSubmit = async(data)=>{
        const formData = new FormData()
        formData.append('image', data.image[0])
       try{
        const {data : url} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,formData)
        console.log(url?.data?.display_url)
        const teacher = {
            name : data.name,
            image : url?.data?.display_url ? url?.data?.display_url : user.photoURL,
            email : user?.email,
            experience : data.experience,
            category : data.experience,
            title : data.title
        }
        console.log(teacher)
        mutateAsync(teacher)
       }
       catch (err){
         console.log(err)
       }
    }
    return (
        <div className="">
            <div className="bg-no-repeat text-white  h-[400px] backdrop-blur-md mb-16 hero  bg-center bg-cover" style={{backgroundImage: `url(${group})`}} >
            <div className="hero-overlay bg-opacity-60 bg-gray-900"></div>
            <TitleSection subHeading={'As a new teacher'} heading={'Hey! Lets Be a teacher'} icon={<FaChalkboardTeacher></FaChalkboardTeacher>}></TitleSection>
            </div>
           <div className="h-[600px] max-w-[1420px]  mx-auto">
            
              <div className="bg-base-300 w-3/5 mx-auto p-10">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                         </label>
                     <input type="name" {...register("name")} placeholder="Your Name" className="input input-bordered" required />
                    </div>  
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Title</span>
                         </label>
                     <input type="text" {...register("title",{ required: true })} placeholder="Title"  className="input input-bordered" required />
                     {errors.title && <span className="text-red-600">This field is required</span>}
                    </div>  
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Email</span>
                         </label>
                     <input type="email" {...register("email")} placeholder="email" value={user.email} disabled className="input input-bordered" />
                    </div>  
                    <div className="flex ">
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Experience</span>
                                </label>
                                <select {...register("experience", { required: true })} className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Select Experience Level</option>
                                    <option>Beginner</option>
                                    <option>MidLevel</option>
                                    <option> Experienced</option>
                                    </select>
                                    {errors.experience && <span className="text-red-600">This field is required</span>}
                            </div>    
                            <div className="form-control ml-7 w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                                </label>
                                <select {...register("category", { required: true })} className="select  select-bordered w-full max-w-xs">
                                    <option disabled selected>Select a category</option>
                                    <option>Web development</option>
                                    <option>Digital marketing</option>
                                    <option>Graphic Designer</option>
                                    <option>Cybersecurity</option>
                                    <option>Data Science</option>
                                    </select>
                                    {errors.category && <span className="text-red-600">This field is required</span>}
                            </div>    
                    </div> 
                      <div className="from-control">
                      <label className="flex h-[48px] items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                            <input  {...register("image")}  name="image" type="file" />
                        </label>
                       <input className="mt-3 btn bg-pink-500 text-white  rounded-lg hover:bg-pink-400" type="submit" value="Submit for review" />
                      </div>
                   
                  </form>
              </div>
           </div>
        </div>
    );
};

export default TechOnSkillPath;