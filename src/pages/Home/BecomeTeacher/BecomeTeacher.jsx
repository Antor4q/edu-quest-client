
import { Link } from "react-router-dom";
import group from "../../../../src/assets/group1.avif"
import { GiTeacher } from "react-icons/gi";

const BecomeTeacher = () => {
    return (
        <div className="bg-no-repeat  text-center md:text-start  backdrop-blur-md my-16 lg:my-24 hero  bg-center bg-cover" style={{backgroundImage: `url(${group})`}}>
            <div className="hero-overlay bg-opacity-80 bg-gray-900"></div>
            <div className="flex px-3 py-10 md:py-0 lg:px-0 gap-8 lg:max-w-[1440px] mx-auto">
                <div className="md:w-3/5 hidden md:flex">
                <img decoding="async" className="scale-x-[-1]" src="https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/cta_4_1.png" alt="cta_4_1"/>
                </div>
                <div className="text-white md:py-8 lg:py-0 py-0 md:w-2/5 flex flex-col  justify-center">
                    <div>
                        <p className="font-semibold text-[#0D6EFD] flex justify-center md:justify-start items-center gap-2"><GiTeacher />New Teacher</p>
                    <h2 className="lg:text-6xl text-4xl font-bold">Become a teacher</h2>
                    <p className="my-5 lg:w-2/3">Begin your teaching journey with us as an instructor. Share your expertise with eager learners worldwide, inspiring growth and fostering a vibrant community of education.</p>
                    <Link to="/techOn" className="md:btn btn btn-sm bg-[#0D6EFD]  md:bg-[#0D6EFD] hover:bg-[#4d81d0] border-none md:text-white text-white">Start teaching today!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeTeacher;