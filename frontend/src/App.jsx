import { Navigate, RouterProvider, redirect, useNavigate, useParams } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/User/LandingPage";
import Login from "./pages/User/Login";
import NavBar from "./components/NavBar";
import Register from "./pages/User/Register";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
// import LoginAdmin from "./pages/Admin/LoginAdmin";
import Dashboard from "./layouts/Dashboard";
import { useEffect } from "react";
import TouristAttractionAdmin from "./pages/Admin/TouristAtrractionAdmin";
import ArticleAdmin from "./pages/Admin/ArticleAdmin";
import About from "./pages/User/About";
import TouristAttraction from "./pages/User/TouristAttraction";
import TouristAttractionDetail from "./pages/User/TouristAttractionDetail";
import Product from "./pages/User/Product";
import Article from "./pages/User/Article";
import Gallery from "./pages/User/Gallery";
import TouristMap from "./pages/User/TouristMap";
import ProductAdmin from "./pages/Admin/ProductAdmin";
import ProductTransaction from "./pages/Admin/ProductTransaction";
import TourPackageAdmin from "./pages/Admin/TourPackageAdmin";
import TourPackageReservation from "./pages/Admin/TourPackageReservation";
import ProductDetail from "./pages/User/ProductDetail";
import Checkout from "./pages/User/Checkout";
import CartPage from "./pages/User/Cart";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registrasi",
    element: <Register />,
  },
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        element: <LandingPage />,
        index: true,
      },

      {
        path: "/destinasi-wisata",
        element: <TouristAttraction />,
      },
      {
        path: "/detail-wisata/:id",
        element: <TouristAttractionDetail />,
      },
      {
        path: "/produk-wisata",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/detail-produk/:id",
        element: <ProductDetail />,
      },
      // {
      //   path: "/komoditas",
      //   element: <DetailWisata />,
      // },
      {
        path: "/artikel",
        element: <Article />,
      },
      {
        path: "/galeri",
        element: <Gallery />,
      },
      {
        path: "/peta-wisata",
        element: <TouristMap />,
      },
      {
        path: "/keranjang",
        element: <CartPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRedirect />,
  },
  // {
  //   path: "/admin/login",
  //   element: <LoginAdmin />,
  // },
  {
    path: "/admin/dashboard",
    element: <Dashboard page={"Dashboard"} />,
    children: [
      {
        element: <DashboardAdmin />,
        index: true,
      },
    ],
  },
  {
    path: "/admin/destinasi-wisata",
    element: <Dashboard page={"Destinasi Wisata"} />,
    children: [
      {
        element: <TouristAttractionAdmin />,
        index: true,
      },
    ],
  },
  {
    path: "/admin/artikel",
    element: <Dashboard page={"Artikel"} />,
    children: [
      {
        element: <ArticleAdmin />,
        index: true,
      },
    ],
  },
  {
    path: "/admin/produk-wisata",
    element: <Dashboard page={"Produk Wisata"} />,
    children: [
      {
        element: <ProductAdmin />,
        index: true,
      },
    ],
  },
  {
    path: "/admin/transaksi-produk-wisata",
    element: <Dashboard page={"Transaksi Produk Wisata"} />,
    children: [
      {
        element: <ProductTransaction />,
        index: true,
      },
    ],
  },
  {
    path: "/admin/paket-wisata",
    element: <Dashboard page={"Paket Wisata"} />,
    children: [
      {
        element: <TourPackageAdmin />,
        index: true,
      },
    ],
  },
  {
    path: "/admin/reservasi-paket-wisata",
    element: <Dashboard page={"Reservasi Paket Wisata"} />,
    children: [
      {
        element: <TourPackageReservation />,
        index: true,
      },
    ],
  },
]);

function AdminRedirect() {
  useEffect(() => {
    // Check if the current path is "/admin" and redirect to "/admin/login"
    if (window.location.pathname === "/admin") {
      window.location.replace("/admin/dashboard");
    }
  }, []);

  return null;
}

function App() {
  
  return <RouterProvider router={router} />;
}
export default App;
