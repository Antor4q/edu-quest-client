import part1 from "../../../../public/partner1.png"
import part2 from "../../../../public/parnter2.png"
import part3 from "../../../../public/partner3.png"
import part4 from "../../../../public/partner4.png"
import part5 from "../../../../public/partner5.png"
import part6 from "../../../../public/partner6.png"
import part7 from "../../../../public/partner7.png"
import part8 from "../../../../public/partner8.png"
import TitleSection from "../../../shared/TitleSection/TitleSection"
import { FaHandsHelping } from "react-icons/fa"
const Partner = () => {
    return (
        <div className="bg-base-200 mb-20  flex flex-col justify-center">
            
           <div className="lg:max-w-[1440px] lg:p-8 mx-auto">
            <TitleSection icon={<FaHandsHelping />} heading={'Collaborators for SkillPath Success'} subHeading={'Our Partners'}></TitleSection>
           <h2 className="text-2xl font-semibold mb-6 text-center"></h2>
           <div className=" grid grid-cols-8 items-center gap-16 ">
                <img src={part1}  alt="" />
                <img src={part2}  alt="" />
                <img src={part3}  alt="" />
                <img src={part4}  alt="" />
                <img src={part5}  alt="" />
                <img src={part6}  alt="" />
                <img src={part7}  alt="" />
                <img src={part8}  alt="" />
            </div>
           </div>
        </div>
    );
};

export default Partner;