import {Link, NavLink} from "react-router-dom";

function HeaderLayout() {
  return (
    <header className="bg-indigo-500 py-4">
      <nav className="flex items-center justify-between container mx-auto">
        <div>
          <Link to="/" className="text-4xl hover:text-white font-bold">
            MD.Front
          </Link>
        </div>

        <div className="flex gap-x-6">
          <NavLink to="/title" className="text-4xl hover:text-white font-bold">
            title
          </NavLink>
          <NavLink to="/about" className="text-4xl hover:text-white font-bold">
            about
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default HeaderLayout;
