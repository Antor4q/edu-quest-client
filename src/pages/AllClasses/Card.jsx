import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const Card = ({item}) => {
    const {title,name, price, description,image,_id} = item
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className=" lg:h-[250px] h-[180px] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body h-[300px] pb-8 lg:p-4">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p className="font-semibold">By {name}</p>
                    <p >{description?.slice(0,60)}</p>
                    <div className="card-actions items-center">
                     <span className="font-medium">{`Total enrollment (0)`}</span>
                        <span className="text-3xl ml-4 font-bold">${price}</span>
                        
                    </div>
                    <Link to={`/details/${_id}`} className="btn w-1/4 bg-[#0D6EFD] btn-outline text-white">Enroll</Link>
                </div>
                </div>
        </div>
    );
};

export default Card;
Card.propTypes = {
    item : PropTypes.object
}