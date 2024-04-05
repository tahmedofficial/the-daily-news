import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const from = new FormData(event.currentTarget);
        const name = from.get("name");
        const photo = from.get("photo");
        const email = from.get("email");
        const password = from.get("password");
        console.log(email, password, name, photo);
        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col mt-24 mx-auto items-center lg:w-3/6 md:w-5/6">
                <h2 className="text-4xl font-medium border-b w-full pb-16 px-10 text-center">Register your account</h2>
                <form onSubmit={handleRegister} className="flex flex-col gap-2 w-full px-14">

                    <span className="text-xl font-medium mt-14">Your name</span>
                    <input
                        className="bg-gray-100 flex outline-none rounded-lg pl-3 h-14"
                        placeholder="Enter your name"
                        required
                        type="text" name="name" id="" />

                    <span className="text-xl mt-4 font-medium">Photo URL</span>
                    <input
                        className="bg-gray-100 flex outline-none rounded-lg pl-3 h-14"
                        placeholder="Photo URL"
                        required
                        type="text" name="photo" id="" />

                    <span className="text-xl mt-4 font-medium">Email</span>
                    <input
                        className="bg-gray-100 flex outline-none rounded-lg pl-3 h-14"
                        placeholder="Enter your email address"
                        required
                        type="email" name="email" id="" />

                    <span className="text-xl mt-4 font-medium">Password</span>
                    <input
                        className="bg-gray-100 flex outline-none rounded-lg pl-3 h-14"
                        placeholder="Enter your password"
                        required
                        type="password" name="password" id="" />

                    <div className="flex gap-3 mt-5 w-full">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <h3>Accept <Link to="/login" className="text-ctm-btn-color font-semibold">Term & Conditions</Link></h3>
                    </div>

                    <button className="btn mt-6 mb-32 bg-ctm-login-color hover:bg-gray-500 text-white text-lg" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;