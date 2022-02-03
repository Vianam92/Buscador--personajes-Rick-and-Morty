import logo from "../images/klipartz.com.png";
import "../styles/Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="logo rick and morty" className="header__img"/>
    </header>
  );
};

export default Header;
