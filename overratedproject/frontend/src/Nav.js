import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <ul className="d-flex flex-row">
      <li className="test d-inline-flex p-2">
        <NavLink to="/reviewlist">
          <button className="btn btn-danger">
            Reviews Card List
          </button>
        </NavLink>
      </li>
      <li className="test d-inline-flex p-2">
        <NavLink to="/locationlist">
          <button className="btn btn-danger">
            Location Card List
          </button>
        </NavLink>
      </li>
      <li className="test d-inline-flex p-2">
        <NavLink to="/createreviewcard">
          <button className="btn btn-danger">
            Create a Review Card
          </button>
        </NavLink>
      </li>
      <li className="test d-inline-flex p-2">
        <NavLink to="/playarea">
          <button className="btn btn-danger">
            Play Area
          </button>
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
