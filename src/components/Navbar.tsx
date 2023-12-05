import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b py-4">
      <div className="container">
        <Link to="/" className="text-xl font-semibold text-slate-900">
          Where in the world?
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
