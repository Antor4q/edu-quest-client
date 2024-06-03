import { GrUserAdmin } from "react-icons/gr";

import PropTypes from "prop-types"
import { TiUserDelete } from "react-icons/ti";

const UsersRow = ({user,index}) => {
    return (
        <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                 {user.name}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{user.email}</td>
                <td>
                    <button disabled={user.role === 'Admin'} className="btn text-white bg-pink-500 text-xl font-medium"><GrUserAdmin /></button>
                </td>
                <td>
                    <button className="btn text-white bg-red-600 text-xl font-medium"><TiUserDelete /></button>
                </td>
          </tr>
    );
};

export default UsersRow;
UsersRow.propTypes = {
    user : PropTypes.object,
    index : PropTypes.number
}