import {  Link } from "react-router-dom";

const Navbar = () => {
  

  const navItems = (
    <>
      <li>
        <Link className=" hover:text-red-300"  to="/">Home </Link>
      </li>
      <li>
        <Link  className=" hover:text-red-300" to="/projects"> Projects</Link>
      </li>
      <li>
        <Link className=" hover:text-red-300" to="/about"> About Me </Link>
      </li>
      <li>
        <Link className=" hover:text-red-300" to="/contact"> Contact Me</Link>
      </li>
     
      

    </>
  );

  return (
    <div>
      <div className="navbar   bg-base-200 text-black  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            
          </Link>
        </div>
        <div className="navbar-center hidden md:flex md:ml-[1vh] lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl ">{navItems}</ul>
        </div>
        <div className="navbar-end pr-4 text-black">
          
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
