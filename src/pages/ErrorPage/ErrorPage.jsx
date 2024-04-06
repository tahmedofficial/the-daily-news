import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error.jpg";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center">
            <img className="w-96 mt-20" src={errorImg} alt="" />
            <Link to="/">
                <button className="btn bg-ctm-login-color mt-10 text-white text-xl px-16">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;