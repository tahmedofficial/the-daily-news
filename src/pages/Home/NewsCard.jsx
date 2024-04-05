import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {

    const { title, author, image_url, details, _id, rating, total_view } = news;
    console.log(news);

    return (
        <div className="border mb-11 rounded-lg">
            <div className="flex justify-between py-3 px-5 bg-gray-100">
                <div className="flex items-center gap-3">
                    <div>
                        <img className="h-14 rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{author.name}</h3>
                        <h3>{author.published_date}</h3>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <CiBookmark className="text-2xl" />
                    <CiShare2 className="text-2xl" />
                </div>
            </div>

            <div className="mt-6 border-b pb-4 px-4">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <img src={image_url} alt="" />
                {
                    details.length > 200 ?
                        <h2 className="mt-8">
                            {details.slice(0, 200)}
                            <Link to={`/news/${_id}`} className="font-semibold text-ctm-star-color"> Read More</Link>
                        </h2>
                        : <h2 className="mt-8">{details}</h2>
                }
            </div>

            <div className="flex justify-between py-5 px-4">
                <div className="flex gap-3">
                    <div className="rating gap-1">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h3 className="text-xl">{rating.number}</h3>
                </div>
                <div className="flex items-center text-xl gap-2">
                    <FaEye />
                    <h3>{total_view}</h3>
                </div>

            </div>

        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
}