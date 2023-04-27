import { Link } from "@remix-run/react";
const Navbar = () => {
  return (
    <div>
      <input type="checkbox" className="drawer-toggle" id="side-bar" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <label htmlFor="side-bar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-6 h-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
