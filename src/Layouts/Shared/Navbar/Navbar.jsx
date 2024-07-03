import logo from "../../../assets/logo/logo dark.png";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#020043]"
          >
            <li>
              <p>Home</p>
            </li>

            <li>
              <p>Services</p>
            </li>

            <li>
              <p>Blog</p>
            </li>

            <li>
              <p>About us</p>
            </li>
          </ul>
        </div>
        <img className="w-24" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#020043]">
          <li>
            <p>Home</p>
          </li>

          <li>
            <p>Services</p>
          </li>

          <li>
            <p>Blog</p>
          </li>

          <li>
            <p>About us</p>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="text-[#020043] font-medium border border-[#343268] rounded-xl px-6 py-2 flex items-center gap-1">Appointment <span className="text-xl"><LuArrowUpRight /></span> </a>
      </div>
    </div>
  );
};

export default Navbar;
