import { MdEmail } from "react-icons/md";
import useRole from "../../../hooks/useRole";
import { FaEdit, FaPhoneAlt } from "react-icons/fa";
import bg from "../../../assets/footer.jpg"

const Profile = () => {
    const [userRole] = useRole()
    
    return (
        <div className="mb-10">
            <div style={{backgroundImage: `url(${bg})`}} className="h-[350px] bg-cover bg-no-repeat px-0 bg-[#0D6EFD]">

            </div>
            <div className="lg:w-2/5 w-4/5 -mt-28 rounded-xl z-20 bg-base-200 mx-auto shadow-xl h-[400px] lg:h-[600px]">
                      <div className="flex flex-col items-center relative">
                      <div className="avatar shadow-lg border-8 rounded-full -mt-20">
                        <div className="w-40 rounded-full">
                            <img src={userRole?.image} />
                        </div>
                        </div>
                        <button className=" text-[#0D6EFD] absolute top-5 right-5 text-xl font-medium"> <FaEdit /></button>
                        <h2 className="text-4xl font-bold mt-4">{userRole?.name}</h2>
                        <p className="text-[#0D6EFD] font-semibold my-3">{userRole?.role}</p>
                        <div className="my-6">
                            <div>
                                <p className="text-xl mb-3 font-medium flex items-center gap-3"><FaPhoneAlt /> {userRole?.phone}</p>
                            </div>
                            <div>
                                <p className="text-xl font-medium flex items-center gap-3"><MdEmail /> {userRole?.email}</p>
                            </div>
                        </div>
                      </div>
            </div>
        </div>
    );
};

export default Profile;