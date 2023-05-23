import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Link to="" onClick={handleLogOut} className="log-out">
        Log Out
      </Link>
      <Link to="/character" className="link">
        Make a Disney Character
      </Link>
      &nbsp; | &nbsp;
      <Link to="/makeachar" className="link">
        Search A Diseny Character
      </Link>
      <br />
      <span className="link">Hiya, {user.name}</span>
    </nav>
  );
}
