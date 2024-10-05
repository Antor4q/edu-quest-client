import { IoSearch } from "react-icons/io5";
import { RiPoliceBadgeLine } from "react-icons/ri";



const ProUsers = () => {
    return (
        <div className="lg:w-full mb-20  p-10 m-10 rounded-lg  bg-white  lg:mx-auto">
        <div className="mb-8 pb-5 border-b">
           <h2 className="text-2xl flex items-center gap-2  font-semibold"><RiPoliceBadgeLine /> Pro Users : 222</h2>
       
        </div>
        <div className="flex justify-evenly my-8">
            <select className="border font-medium px-4 rounded-lg">
                <option selected disabled>Sort by</option>
                <option>New users</option>
                <option>1 month pro</option>
                <option>6 month pro</option>
                <option>12 month pro</option>
            </select>
            <label className="input input-bordered bg-base-100 w-3/12 flex items-center gap-2">
                        <input type="text" className="grow " placeholder="Search" />
                        <IoSearch/>
            </label>
        </div>
       <div className="overflow-x-auto">
           <table className="table">
             <thead>
               <tr>
                   <th>
                      
                   </th>
                   <th>User Name</th>
                   <th>User Image</th>
                   <th>User Email</th>
                   <th>Status</th>
                   <th>Progress date</th>
                   <th>Action</th>
               </tr>
               </thead>
               <tbody>
                {/* row 1 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
                {/* row 2 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
                {/* row 3 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
                {/* row 4 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
                {/* row 5 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
                {/* row 6 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
                {/* row 7 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
                {/* row 8 */}
               <tr>
                <th>
                    { 1}
                </th>
                <td>
                 {"Ahmed Antor"}
                </td>
                <td>
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={"https://i.ibb.co.com/JFppdZ7/345455991-774193470882967-927038510640535088-n.jpg"} alt="User" />
                    </div>
                    </div>
                </td>
                <td>{"tariquelislam2015@gmail.com"}</td>
                <td>
                    Pending
                </td>
                <td>
                   25 days left
                </td>
                <td>
                <select className=" rounded-lg">
                <option selected disabled>Select one</option>
                <option>Accept</option>
                <option>Reject</option>
                <option>Delete</option>
                </select>
                </td>
               </tr>
               </tbody>
           </table>
       </div>
    </div>
    );
};

export default ProUsers;