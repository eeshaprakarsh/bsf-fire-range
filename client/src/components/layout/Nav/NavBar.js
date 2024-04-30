import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HomeTwoTone } from "@ant-design/icons";
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/bsf-fire-range/homePage" className="nav-link">
        <HomeTwoTone />
        Home
      </NavLink>
    </nav>
  );
}

export default NavBar;
