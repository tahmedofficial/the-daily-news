import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex bg-gray-100 p-2 rounded-lg mt-8">
            <button className="btn bg-ctm-btn-color text-white">Latest</button>
            <Marquee  pauseOnHover={true} speed={60}>
                <div className="flex gap-10">
                    <Link className="ml-10" to="/">
                        I can be a React component, multiple React components, or just some text.....
                    </Link>
                    <Link to="/">
                        I can be a React component, multiple React components, or just some text.....
                    </Link>
                    <Link to="/">
                        I can be a React component, multiple React components, or just some text.....
                    </Link>
                    <Link to="/">
                        I can be a React component, multiple React components, or just some text.....
                    </Link>
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;