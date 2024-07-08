import PropTypes from "prop-types"

const Blog = ({blog}) => {
    return (
        <div  className="max-w-sm mx-auto group  dark:bg-gray-50 ">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog?.image} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl cursor-pointer font-semibold group-hover:underline ">{blog?.title}</h3>
            <span className="text-xs dark:text-gray-600">{blog?.publish_date}</span>
            <p>{blog?.content.slice(0,120)}</p>
            <p className="font-semibold">By {blog?.author}</p>
        </div>
    </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog : PropTypes.object
}