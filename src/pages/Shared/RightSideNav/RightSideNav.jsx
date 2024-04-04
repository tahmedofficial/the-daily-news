import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/images/qZone1.png";
import qZone2 from "../../../assets/images/qZone2.png";
import qZone3 from "../../../assets/images/qZone3.png";

const RightSideNav = () => {
    return (
        <div>

            <div className="p-3">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full mt-5">
                    <FaGoogle className="text-xl" />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full mt-3">
                    < FaGithub className="text-xl" />
                    Login With Github
                </button>
            </div>

            <div className="p-3 mt-10">
                <h2 className="text-2xl font-semibold">Find Us On</h2>
                <div className="border rounded-lg mt-5 p-4">
                    <a className="flex text-lg border-b pb-2 items-center gap-2" href="">
                        <FaFacebook className="text-3xl" />Facebook
                    </a>
                    <a className="flex mt-4 text-lg border-b pb-2 items-center gap-2" href="">
                        <FaTwitter className="text-3xl" />Twitter
                    </a>
                    <a className="flex mt-4 text-lg border-b pb-2 items-center gap-2" href="">
                        <FaInstagram className="text-3xl" />Instagram
                    </a>
                </div>
            </div>

            <div className="bg-gray-100 p-4 mt-5 mx-3 rounded-lg">
                <h2 className="text-2xl font-semibold mb-5">Q-Zone</h2>
                <img className="mt-3 w-full" src={qZone1} alt="qZoneimg" />
                <img className="mt-3 w-full" src={qZone2} alt="qZoneimg" />
                <img className="my-3 w-full" src={qZone3} alt="qZoneimg" />
            </div>
        </div>
    );
};

export default RightSideNav;