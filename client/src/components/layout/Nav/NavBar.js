import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HomeTwoTone } from "@ant-design/icons";
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/bsf-fire-range/homePage" className="nav-link">
        <HomeTwoTone />
        Home
      </NavLink>
      <NavLink to="/bsf-fire-range/" className="nav-link">
        Welcome Ambikesh!{" "}
      </NavLink>
    </nav>
  );
}

export default NavBar;
