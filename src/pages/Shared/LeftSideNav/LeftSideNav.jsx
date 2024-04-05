import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories);

    return (
        <div className="px-4">
            <h2 className="text-2xl font-semibold">All Caterogy</h2>
            <div>
                {
                    categories.map(categorie => <NavLink
                        className="block ml-8 text-xl mt-5 text-gray-500"
                        to={`/category/${categorie.id}`}
                        key={categorie.id}>{categorie.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;