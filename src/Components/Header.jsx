import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";

export default function Header({ facade, LoggedIn }) {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            HOME
          </NavLink>
        </li>
        {facade.hasUserAccess("user", LoggedIn) && (
          <div>
            <li>
              <NavLink activeClassName="active" to="/TripsTab">
                Trips
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/AllGuidesTab">
                Trip description
              </NavLink>
            </li>
          </div>
        )}
        {facade.hasUserAccess("admin", LoggedIn) && (
          <div>
            <li>
              <NavLink activeClassName="active" to="/CreateTripsTab">
                Create trip and guide
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}
