import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <nav>
        {!user ? (
          <div className="nav-content">
            <div className="logo">
              <a href="/">BarberGo ✁</a>
            </div>

            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/feedback">feedback</a>
              </li>

              <div className="drop2">
                <li>
                  <a href="/">contact</a>
                </li>
                <div className="dropdown-content2">
                  <a href="insta">instagram</a>
                  <a href="insta">facebook</a>
                  <a href="insta">twitter</a>
                  <a href="insta">gmail</a>
                </div>
              </div>

              <div className="dropdown">
                <li>
                  <a href="/">Login</a>
                </li>
                <div className="dropdown-content">
                  <a href="/customerlogin">Customer Signin</a>
                  <a href="/salonlogin">Salon Signin</a>
                </div>
              </div>
            </ul>
          </div>
        ) : (
          <div className="nav-content">
            <div className="logo">
              <a href="/">BarberGo ✁</a>
            </div>

            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/feedback">feedback</a>
              </li>

              <div className="drop2">
                <li>
                  <a href="/">contact</a>
                </li>
                <div className="dropdown-content2">
                  <a href="insta">instagram</a>
                  <a href="insta">facebook</a>
                  <a href="insta">twitter</a>
                  <a href="insta">gmail</a>
                </div>
              </div>

              <div className="user">
                <div>
                  <img
                    className="dp"
                    src={user?.photoURL || ""}
                    width="40"
                    height="40"
                  />
                  <h3>{user?.displayName}</h3>
                  <button className="logout" onClick={logOut}>
                    Log Out
                  </button>
                </div>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
