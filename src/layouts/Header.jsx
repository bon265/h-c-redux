import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
function Header() {
    return (
        <>
            <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto   px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="logo-manh-cuong" className="h-15 w-auto" />
            <h2 className="font-bold text-2xl">Nội Thất Mạnh Cường</h2>
          </div>

          {/* Menu links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/product-create" className="hover:text-gray-300">
              Products Management
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Management
            </Link>
            <Link to="/new-order" className="hover:text-gray-300">
              customer-order
            </Link>
          </div>
        </div>
      </div>
    </nav>
        </>
    );
}

export default Header;