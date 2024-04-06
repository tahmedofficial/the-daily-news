import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useLoaderData } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";

const News = () => {

    const { id } = useParams();
    const news = useLoaderData();
    const newsDetails = news.find(aNews => aNews._id === id);
    const { title, image_url, details } = newsDetails;

    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4 mt-10">

                <div className="col-span-3 px-3">

                    <h2 className="text-2xl font-semibold my-4">Daily News</h2>
                    <div className="border p-6 rounded-xl">
                        <img className="w-full" src={image_url} alt="" />
                        <h1 className="text-3xl font-semibold my-5">{title}</h1>
                        <h3>{details}</h3>
                        <Link to="/">
                            <button className="btn my-10 font-normal text-white text-lg bg-ctm-btn-color hover:bg-slate-500">
                                <GoArrowLeft />
                                All news in this category
                            </button>
                        </Link>

                    </div>

                    <h2 className="text-2xl font-semibold my-4">Editors Insight</h2>
                    <div className="lg:grid grid-cols-3 gap-4">
                        {
                            news.slice(0, 3).map(aNews => <div
                                className="bg-gray-100 mb-4 p-4 col-span-1 rounded-2xl"
                                key={aNews._id}>
                                <img className="w-full lg:h-52 h-96" src={aNews.thumbnail_url} alt="" />
                                <h1 className="text-xl font-semibold mt-4">{aNews.title.slice(0, 50)}</h1>
                                <h3 className="flex gap-2 mt-6">
                                    <MdOutlineDateRange className="text-xl" />
                                    {aNews.author?.published_date}
                                </h3>
                            </div>
                            )
                        }
                    </div>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;