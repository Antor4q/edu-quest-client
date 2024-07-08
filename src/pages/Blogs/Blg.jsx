import PropTypes from "prop-types"

const Blg = ({blog}) => {
    return (
        <div>
            <div  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={blog?.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl cursor-pointer font-semibold group-hover:underline ">{blog?.title}</h3>
                            <span className="text-xs dark:text-gray-600">{blog?.publish_date}</span>
                            <p>{blog?.content}</p>
                        </div>
                      </div>
        </div>
    );
};

export default Blg;

Blg.propTypes = {
    blog : PropTypes.object
}