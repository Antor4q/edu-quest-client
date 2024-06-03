
import Banner from "../Banner/Banner";
import BecomeTeacher from "../BecomeTeacher/BecomeTeacher";
import BookLive from "../BookLive/BookLive";
import MeetTeacher from "../MeetTeacher/MeetTeacher";
import Partner from "../Partner/Partner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Reviews from "../Reviews/Reviews";
import WebInfo from "../WebInfo/WebInfo";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Partner></Partner>
            <PopularClasses></PopularClasses>
            <Reviews></Reviews>
            <WebInfo></WebInfo>
            <BecomeTeacher></BecomeTeacher>
            <BookLive></BookLive>
            <MeetTeacher></MeetTeacher>
           
            
        </div>
    );
};

export default Home;