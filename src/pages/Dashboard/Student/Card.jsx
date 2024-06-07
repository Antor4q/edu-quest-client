import PropTypes from "prop-types"

const Card = ({item}) => {
   
   
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[193px] w-full" src={item?.image} alt="Shoes" /></figure>
            <div className="card-body h-[184px]">
                <h2 className="card-title text-2xl font-bold">{item?.title}</h2>
                <p className="font-semibold">Teacher {item?.name}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline bg-pink-600 text-white">Continue</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;
Card.propTypes = {
    item : PropTypes.object
}