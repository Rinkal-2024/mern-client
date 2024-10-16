import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import '../App.css'
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const location = useLocation();

  const {user} = useContext(AuthContext);
  // console.log(user)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Conditionally render the Navbar based on the current path
  // Don't render Navbar on admin routes
  if (location.pathname.startsWith('/admin')) {
    return  <div className="flex justify-between items-center text-base gap-8">
<Link to="/" className="text-2xl font-bold text-blue-700 py-4">
    <FaBlog className="inline-block "  /> Books
  </Link>
  </div>
  }

  const navItem = [
    { link: "Home", path: "/" },
    // { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    // { link: "Blog", path: "/blog" },
    // { link: "Register", path: "/sign-up" },
    // { link: "Login", path: "/login" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50">
    <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
      <div className="flex justify-between items-center text-base gap-8">
        <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center">
          <FaBlog className="inline-block" /> Books
        </Link>
  
        <ul className="md:flex space-x-12 hidden">
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
            >
              {link}
            </Link>
          ))}
        </ul>
  
        <div className="space-x-12 hidden lg:flex items-center">
          <button>
            <FaBarsStaggered className="w-5 hover:text-blue-700" />
          </button>
        </div>
  
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5 text-black" />
            ) : (
              <FaBarsStaggered className="h-5 w-5 text-black" />
            )}
          </button>
        </div>
      </div>
  
      {/* Mobile menu */}
      <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
        {navItem.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            className="block text-base text-white uppercase cursor-pointer hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  </header>
  
  );
};

export default Navbar;
