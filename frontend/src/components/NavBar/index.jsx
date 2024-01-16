import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { AccountCircleRounded, Search } from "@mui/icons-material";
import Footer from "../Footer";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const activelink = "text-cyan-600 bg-white rounded-md py-2 px-2";
  const normalLink =
    "hover:text-cyan-600 hover:bg-white text-white rounded-md py-2 px-2";

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked (optional)
    setMenuOpen(false);
  };

  const handleSearch = (event) => {
    // Handle search logic here
    // console.log("Search query:", event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed w-full transition-all z-10 ${
          isScrolled ? "bg-teal-500" : "bg-cyan-800"
        }`}
      >
        <div className="flex w-full justify-between bg-cyan-800 items-center py-4 px-7">
          <div>
            <div className="text-xl text-white">Desa Wisata Colo</div>
            <div className="text-md text-white">Kabupaten Kudus</div>
          </div>
          <div className="flex g-2">
            <NavLink to={"/admin"}>
              <div className="rounded-md bg-cyan-300 p-2 text-white">
                Login Admin
              </div>
            </NavLink>

            <div className="p-2 text-white flex items-center">
              <AccountCircleRounded />
              Sign In
            </div>
          </div>
        </div>
        <nav className="flex items-center text-md justify-between flex-wrap bg-teal-500 px-5 py-1 w-full z-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activelink + `flex items-center flex-shrink-0 px-3 mr-5`
                : normalLink +
                  `flex items-center flex-shrink-0 text-white px-3 mr-5`
            }
          >
            <HomeIcon style={{ fontSize: "1.5rem" }} />
          </NavLink>
          <div className="block md:hidden">
            <button
              onClick={handleToggleMenu}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full block justify-between mt-5 flex-grow md:mt-0 md:flex md:items-center md:w-auto`}
          >
            <div className="flex flex-col items-center gap-5 w-full md:flex-row">
              <NavLink
                to="/destinasi-wisata"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={handleLinkClick}
              >
                Destinasi
              </NavLink>
              <NavLink
                to="/produk-wisata"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={handleLinkClick}
              >
                Produk
                {/* dropdown */}
              </NavLink>
              <NavLink
                to="/artikel"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={handleLinkClick}
              >
                Artikel
              </NavLink>
              <NavLink
                to="/galeri"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={handleLinkClick}
              >
                Galeri
              </NavLink>
              <NavLink
                to="/peta-wisata"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={handleLinkClick}
              >
                Peta
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activelink : normalLink
                }
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </div>
            <div className="flex justify-center bg-white items-center h-9 w-96 rounded-lg mt-5 md:mt-0 ps-2">
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                className="w-full ps-1 focus:outline-none"
              ></input>
              <Search
                className="text-cyan-600"
                style={{ fontSize: "1.5rem" }}
              />
            </div>
          </div>
        </nav>
      </div>
      <div className="pt-32 -z-10">
        <div>
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default NavBar;
