import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";


const SignIn = () => {
    const {register,handleSubmit,reset,formState: { errors },} = useForm()
    const {signIn} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const navo = location.state || "/"
    const [err,setErr] = useState("")

    const onSubmit = async(data) =>{
            await signIn(data.email, data.password)
            .then((result) => {
                if(result?.user){
                    reset()
                    setErr("")
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully sign in",
                        showConfirmButton: false,
                        timer: 1500
                      });
                   
                        navigate(navo,{replace: true})
                   
                   }
            })
            .catch((err) => {
                setErr(err.message.slice(10))
            })
         }
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                        
                        
                        <div className="flex items-center justify-center mt-6">
                           
                            <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                sign In
                            </a>
                        </div>

                    

                       

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input {...register("email", { required: true })} type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className="relative flex items-center mt-4">
                            
                            <span className="ml-3 absolute " onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <LuEyeOff />:<LuEye />}</span>
                           
                            <div>
                            <input {...register("password", { required: true })} type={showPassword ? "text": "password"} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            {err ? <span className="text-red-600">{err}</span>:"" }
                            </div>
                        </div>

                      

                        <div className="mt-6">
                            <input type="submit" className="w-full cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0D6EFD] rounded-lg hover:bg-[#658bc3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" value="Sign In" />

                            
                        </div>
                    </form>
                    <div className="mt-6 text-center ">
                                <SocialLogin></SocialLogin>
                                <p className="text-sm   dark:text-blue-400">
                                    New Here? <Link className="text-[#0D6EFD] hover:underline" to="/signUp">Sign Up</Link>
                                </p>
                            </div>
                    </div>
                </div>
            </section>
         
        </div>
    );
};

export default SignIn;