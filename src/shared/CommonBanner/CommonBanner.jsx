import PropTypes from "prop-types"

const CommonBanner = ({title}) => {
    return (
        <div className={`w-full hero  h-[400px]  bg-cover bg-no-repeat`} style={{backgroundImage : `url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_1_3.png)`}}>
            <div className="hero-overlay lg:pt-10  bg-[#0b1628] bg-opacity-80"></div>
            <div className="w-2/3 mx-auto h-[250px] flex items-center justify-center bg-gray-200 bg-opacity-20">
                <h3 className="text-3xl font-bold text-white">{title}</h3>
            </div>
        </div>
    );
};

export default CommonBanner;

CommonBanner.propTypes = {
    title : PropTypes.string
}