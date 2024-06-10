import PropTypes from "prop-types"

const TitleSection = ({heading,subHeading,icon}) => {
    return (
        <div className="my-10 flex flex-col items-center text-center">
            <p className="font-semibold text-[#0D6EFD] flex items-center gap-2">{icon}{subHeading}</p>
            <h2 className="text-4xl font-bold mt-2">{heading}</h2>
        </div>
    );
};

export default TitleSection;
TitleSection.propTypes = {
    heading : PropTypes.string,
    subHeading : PropTypes.string,
    icon : PropTypes.element
}