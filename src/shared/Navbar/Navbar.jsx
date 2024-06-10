import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaList } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/logo.png"

const Navbar = () => {
    const {user,logOut,setSearch} = useAuth()
    const nav = <>
      <li><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/">Home</NavLink></li>
      <li><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/allClasses">All Classes</NavLink></li>
      <li><NavLink style={({isActive})=> isActive? {color: "#0D6EFD",background:"none"}:{}} to="/techOn">Tech On EduQuest</NavLink></li>
    </>
    const handleSearch = search => {
        setSearch(search)
    }

    const handleLogOut = async() => {
        await logOut()
        .then()
        .catch()
    }

    return (
        <div className="py-2">
             <div className="navbar lg:max-w-[1420px] h-[100px]  lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     { nav}
                </ul>
                </div>
                
                <Link to="/" className="lg:text-xl h-[100px] w-[150px]  md:h-[300px] md:min-w-[300px] flex items-center text-center relative"><div className="absolute -left-5 lg:-left-24"> <img className=" h-[150px] w-[150px]  md:h-[300px] md:min-w-[300px]" src={logo} alt="" /></div></Link>
                <div className="ml-8 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
            </div>
          
            <div className="navbar-end">
             <div className="md:mr-20 hidden md:flex">
                 <label className="input input-bordered rounded-full py-1 flex items-center gap-2">
                    <input onChange={(e)=>handleSearch(e.target.value)} type="text" className="grow" placeholder="Search class by title" />
                    <IoSearch />
                    </label>
                 </div>
                {
                    user ? <div className="border w-24 dropdown dropdown-end   rounded-full hover:shadow-lg ">
                           <div tabIndex={0} role="button" className="flex items-center justify-center  p-1 gap-3">
                                <FaList className="text-xl"></FaList>
                                <div  className="avatar">
                                    <div className="w-8 rounded-full">
                                    <img src={user?.photoURL} />
                                    </div>
                                </div> 
                           </div>
                            <ul tabIndex={0} className="dropdown-content font-bold z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><p>{user?.displayName}</p></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><button onClick={handleLogOut}>Log Out</button></li>
                                </ul>
                    </div>: 
                  <Link to="/signIn" className="btn px-5 py-1 hover:border-none text-[#0D6EFD] btn-outline hover:bg-[#0D6EFD] hover:text-white">Sign In</Link>
                }
                
            </div>
            </div>
        </div>
    );
};

export default Navbar;