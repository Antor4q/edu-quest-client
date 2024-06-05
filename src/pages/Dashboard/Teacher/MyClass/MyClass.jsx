import { MdManageAccounts } from "react-icons/md";
import TitleSection from "../../../../shared/TitleSection/TitleSection";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import MyClassCard from "./MyClassCard";


const MyClass = () => {
    const {user} = useAuth()
    const axiosSecure = useAxios()

    const {data,refetch,isPending} = useQuery({
        queryKey: ['class'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/class/${user?.email}`)
            return res.data
        }
    })
    if(isPending){
        return <span className="font-bold text-4xl text-center">Loading...</span>
    }
    return (
        <div>
            <TitleSection subHeading={'Overview Your classes'} icon={<MdManageAccounts></MdManageAccounts>} heading={"Mange your all classes here"}></TitleSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-24 pl-10">
               {
                data?.map(cla => <MyClassCard key={cla._id} cla={cla} refetch={refetch}></MyClassCard>)
               }
                
            </div>
        </div>
    );
};

export default MyClass;