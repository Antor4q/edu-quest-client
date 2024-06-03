import { Link } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";


const SignIn = () => {
    const {register,handleSubmit,formState: { errors },} = useForm()
    const {signIn} = useAuth()

    const onSubmit = async(data) =>{
            await signIn(data.email, data.password)
            .then(() => {
               
            })
            .catch((err) => {
                console.log(err.message)
            })
         }
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                        <div className="flex justify-center mx-auto">
                            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>
                        </div>
                        
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
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <div>
                            <input {...register("password", { required: true })} type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            </div>
                        </div>

                      

                        <div className="mt-6">
                            <input type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#B51B75] rounded-lg hover:bg-[#b25089] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" value="Sign In" />

                            
                        </div>
                    </form>
                    <div className="mt-6 text-center ">
                                <SocialLogin></SocialLogin>
                                <p className="text-sm   dark:text-blue-400">
                                    New Here? <Link className="text-[#B51B75] hover:underline" to="/signUp">Sign Up</Link>
                                </p>
                            </div>
                    </div>
                </div>
            </section>
         
        </div>
    );
};

export default SignIn;