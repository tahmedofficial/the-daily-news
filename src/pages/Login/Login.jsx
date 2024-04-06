import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location, "login page");

    const handleLogin = (event) => {
        event.preventDefault();
        const from = new FormData(event.currentTarget);
        const email = from.get("email");
        const password = from.get("password");
        console.log(email, password);

        // sign in
        signIn(email, password)
            .then(navigate(location?.state ? location.state : "/"))
            .catch()
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col mt-24 mx-auto items-center lg:w-3/6 md:w-5/6">
                <h2 className="text-4xl font-medium border-b w-full pb-16 px-10 text-center">Login your account</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full px-14">
                    <span className="text-xl font-medium mt-14">Email</span>
                    <input
                        className="bg-gray-100 flex outline-none rounded-lg pl-3 h-14"
                        placeholder="Enter your email address"
                        required
                        type="email" name="email" id="" />
                    <span className="text-xl font-medium">Password</span>
                    <input
                        className="bg-gray-100 flex outline-none rounded-lg pl-3 h-14"
                        placeholder="Enter your password"
                        required
                        type="password" name="password" id="" />
                    <button className="btn mt-10 bg-ctm-login-color hover:bg-gray-500 text-white text-lg" type="submit">Login</button>
                </form>
                <h3 className="font-medium mt-6"> Do not Have An Account ?
                    <Link to="/register" className="text-ctm-btn-color"> Register</Link>
                </h3>
            </div>
        </div>
    );
};

export default Login;