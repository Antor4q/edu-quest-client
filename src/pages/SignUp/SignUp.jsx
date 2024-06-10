import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../shared/SocialLogin";

import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SignUp = () => {
    const {signUp,profileUpdate} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [showPassword, setShowPassword] = useState(false)
    
      const {register,handleSubmit,reset,formState: { errors },} = useForm()

      const {mutateAsync} = useMutation({
        mutationFn : async(userData) => {
            const {data :dat} = await axiosPublic.post("/users",userData)
            return dat
        },
        onSuccess : ()=> {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully sign in",
                showConfirmButton: false,
                timer: 1500
              });
        }
      })
    
      const onSubmit = async(data) =>{
        
         
         const formData = new FormData()
          formData.append('image', data.image[0])
         try{
            const {data : url} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,formData)
           
            const result = await signUp(data.email, data.password)
            console.log(result)
            await profileUpdate(data.name, url?.data?.display_url)
            .then(()=>{
                const userData = {
                    name : data.name,
                    email : data.email,
                    phone : data.phone,
                    password : data.password,
                    image : url?.data?.display_url,
                    role : "Student"
                 }
                 mutateAsync(userData)
                
            })
         }
         catch (err) {
            console.log(err)
         }
         
        }
  

    return (
        <div>
               <section className="bg-white dark:bg-gray-900 max-w-[1440px] mx-auto">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                   <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                           
                            
                            <div className="flex items-center justify-center mt-6">
                            
                                <p className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                    sign Up
                                </p>
                            </div>

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input {...register("name", { required: true })} type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username"/>
                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>

                            <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                                

                                

                                <input {...register("image", { required: true })}  name="image" type="file" />
                                {errors.image && <span className="text-red-600">This field is required</span>}
                            </label>

                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input {...register("phone", { required: true })} type="number" name="phone" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phone number"/>
                                {errors.phone && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input {...register("email", { required: true })} type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="relative flex items-center mt-4">
                              <span className="text-xl absolute ml-3" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <LuEyeOff />:<LuEye />}</span>

                                <input type={showPassword ? "text": "password"}  {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[a-z]).*$/,minLength: 6 })} name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                                {errors.password && <span className="text-red-600">This field is required</span>}
                                {errors.password && errors.password.type === "pattern" && (<span className="text-red-500">Password must have an Uppercase and Lowercase</span>)}
                                {errors.password && errors.password.type === "minLength" && (<span className="text-red-500">Password should be at least 6 characters</span>)}
                            </div>
                           
                        

                            <div className="mt-6">
                                <input type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#B51B75] rounded-lg hover:bg-[#b25089] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" value="Sign Up" />

                            
                            </div>
                            
                        </form>
                        <div className="mt-6 text-center ">
                                    <SocialLogin></SocialLogin>
                                    <span  className="text-sm   dark:text-blue-400">
                                    Already have an account? <Link className="text-[#B51B75] hover:underline" to="/signIn">Sign In</Link>
                                    </span>
                                </div>
                   </div>
                    
                </div>
            </section>
        </div>
    );
};

export default SignUp;