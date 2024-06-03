import PropTypes from "prop-types"

const TeacherReqRow = ({teacher,index}) => {
    const { name ,image , experience,category, title} = teacher
    return (
       <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td> <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="User" />
                    </div>
                    </div></td>
            <td>{experience}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{'Pending'}</td>
            <td><button>Accept</button></td>
            <td><button>Reject</button></td>
       </tr>
    );
};

export default TeacherReqRow;
TeacherReqRow.propTypes = {
    teacher : PropTypes.object,
    index : PropTypes.index
}