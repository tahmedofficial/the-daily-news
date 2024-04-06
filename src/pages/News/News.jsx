import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useLoaderData } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";
import editorsInsight1 from "../../assets/images/editorsInsight1.png";
import editorsInsight2 from "../../assets/images/editorsInsight2.png";
import editorsInsight3 from "../../assets/images/editorsInsight3.png";

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

                        <div className="border mb-4 p-4 col-span-1 rounded-2xl">
                            <img className="" src={editorsInsight1} alt="" />
                            <h1 className="text-xl font-semibold mt-4">Tucker Carlson has rarely met a dictator puckering up list.</h1>
                            <h3 className="flex gap-2 mt-6">
                                <MdOutlineDateRange className="text-xl" />
                                Jan 4, 2022
                            </h3>
                        </div>
                        <div className="border mb-4 p-4 col-span-1 rounded-2xl">
                            <img className="" src={editorsInsight2} alt="" />
                            <h1 className="text-xl font-semibold mt-4">Tucker Carlson has rarely met a dictator puckering up list.</h1>
                            <h3 className="flex gap-2 mt-6">
                                <MdOutlineDateRange className="text-xl" />
                                Jan 4, 2022
                            </h3>
                        </div>
                        <div className="border mb-4 p-4 col-span-1 rounded-2xl">
                            <img className="" src={editorsInsight3} alt="" />
                            <h1 className="text-xl font-semibold mt-4">Tucker Carlson has rarely met a dictator puckering up list.</h1>
                            <h3 className="flex gap-2 mt-6">
                                <MdOutlineDateRange className="text-xl" />
                                Jan 4, 2022
                            </h3>
                        </div>
                        

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