import { Link, NavLink } from "react-router-dom";
import userPicture from "../../../assets/images/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-10 rounded-3xl mr-4">
                    <img className="rounded-3xl" alt="Profile Picture" src={userPicture} />
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn px-10 bg-ctm-login-color text-white">Sign Out</button>
                        : <Link to="/login">
                            <button className="btn px-10 bg-ctm-login-color text-white">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;