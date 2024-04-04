import logo from "../../../assets/images/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center mt-12">
            <img className="mx-auto mb-4" src={logo} alt="" />
            <h3>Journalism Without Fear or Favour</h3>
            <h3 className="text-xl mt-2">{moment().format("dddd, MMMM D, YYYY")}</h3>
        </div>
    );
};

export default Header;