import { MdManageAccounts } from "react-icons/md";
import TitleSection from "../../../../shared/TitleSection/TitleSection";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import MyClassCard from "./MyClassCard";


const MyClass = () => {
    const {user} = useAuth()
    const axiosSecure = useAxios()

    const {data,refetch} = useQuery({
        queryKey: ['class'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            return res.data
        }
    })
    console.log(data)
    return (
        <div>
            <TitleSection subHeading={'Overview Your classes'} icon={<MdManageAccounts></MdManageAccounts>} heading={"Mange your all classes here"}></TitleSection>
            <div className="grid grid-cols-2 gap-7 my-24 pl-10">
               {
                data?.map(cla => <MyClassCard key={cla._id} cla={cla} refetch={refetch}></MyClassCard>)
               }
                
            </div>
        </div>
    );
};

export default MyClass;