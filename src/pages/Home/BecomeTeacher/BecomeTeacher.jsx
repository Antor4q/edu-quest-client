
import { Link } from "react-router-dom";
import group from "../../../../src/assets/group1.avif"
import { GiTeacher } from "react-icons/gi";

const BecomeTeacher = () => {
    return (
        <div className="bg-no-repeat backdrop-blur-md my-24 hero  bg-center bg-cover" style={{backgroundImage: `url(${group})`}}>
            <div className="hero-overlay bg-opacity-80 bg-gray-900"></div>
            <div className="flex gap-8 max-w-[1440px] mx-auto">
                <div className="w-3/5">
                <img decoding="async" className="scale-x-[-1]" src="https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/cta_4_1.png" alt="cta_4_1"/>
                </div>
                <div className="text-white w-2/5 flex flex-col justify-center">
                    <div>
                        <p className="font-semibold text-pink-600 flex items-center gap-2"><GiTeacher />New Teacher</p>
                    <h2 className="text-6xl font-bold">Become a teacher</h2>
                    <p className="my-5 w-2/3">Begin your teaching journey with us as an instructor. Share your expertise with eager learners worldwide, inspiring growth and fostering a vibrant community of education.</p>
                    <Link to="/techOn" className="btn bg-pink-600 hover:bg-pink-400 border-none text-white">Start teaching today!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeTeacher;