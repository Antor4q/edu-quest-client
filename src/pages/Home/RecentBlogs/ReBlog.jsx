import PropTypes from "prop-types"
const ReBlog = ({blog}) => {
    return (
        <div>
            <div className="card  bg-base-100  shadow-xl">
                <figure>
                    <img
                    className="lg:h-[200px] w-full"
                    src={blog?.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body lg:h-[195px] pt-3">
                    <h2 className="card-title">{blog?.title}</h2>
                    <p>{blog?.content.slice(0,100)}</p>
                     <div className="flex gap-5">
                        <h3 className=" font-semibold">{blog?.author}</h3>
                        <p>{blog?.publish_date}</p>
                     </div>
                </div>
                </div>
        </div>
    );
};

export default ReBlog;
ReBlog.propTypes = {
    blog : PropTypes.object
}