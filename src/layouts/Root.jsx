import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="md:w-9/12 mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;