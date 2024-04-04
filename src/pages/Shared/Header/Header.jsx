import logo from "../../../assets/images/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <h3>Journalism Without Fear or Favour</h3>
            <h3 className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</h3>
        </div>
    );
};

export default Header;