import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";


const SocialLogin = () => {
    const {googleSign} = useAuth()
    const axiosPublic = useAxiosPublic()

    const {mutateAsync} = useMutation({
        mutationFn : async(userData) => {
            const {data :dat} = await axiosPublic.post("/users",userData)
            return dat
        },
        onSuccess : ()=> {
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully sign in",
                showConfirmButton: false,
                timer: 1500
              });
        }
      })

    const handleGoogleSign = async() => {
       await googleSign()
        .then(async(result) => {
           
            if(result.user){
                const {data} = await axiosPublic.get(`/users/${result?.user.email}`)
                if(data){
                    return  Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully sign in",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

                const userData = {
                    name : result?.user.displayName,
                    email : result?.user.email,
                    image : result.user.photoURL,
                    role : "Student"
                 }
                 mutateAsync(userData)

                
            }
            
        })
    }
    return (
        <>
        
        <p>Or Sign In with</p>
        <button onClick={handleGoogleSign} className="w-full btn text-[#0D6EFD] btn-outline my-4 rounded-lg px-6 py-3 border">Google</button>
        </>
    );
};

export default SocialLogin;