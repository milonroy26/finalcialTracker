import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow fixed top-0 z-50 px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="https://play-lh.googleusercontent.com/1iukd3WQv6HTWfLQeWiXlqgYaCG89LVy7jLI7lB1LWv0gdV42WMKLRhMPY1OR-2egI8"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}> Home </Link>
              </li>
              <li>
                <Link to={"/income"}>Income</Link>
              </li>
              <li>
                <Link to={"/expensive"}>Expensive</Link>
              </li>
            </ul>
          </div>
          <img
            className="w-[50px] h-[50px]"
            src="https://play-lh.googleusercontent.com/1iukd3WQv6HTWfLQeWiXlqgYaCG89LVy7jLI7lB1LWv0gdV42WMKLRhMPY1OR-2egI8"
            alt=""
          />
        </div>

        {/* PC */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}> Home </Link>
            </li>
            <li>
              <Link to={"/income"}>Income</Link>
            </li>
            <li>
              <Link to={"/expensive"}>Expensive</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
