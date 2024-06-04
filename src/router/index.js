import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layouts/Layout";
import Profile from "../pages/ProfilePage";
import Saved from "../pages/SavedPage";
import Products from "../pages/ProductsPage";
import Cart from "../pages/CartPage";
import AddProduct from "../pages/AddProductPage";
import Selling from "../pages/SellingPage";
import About from "../pages/AboutPage";
import Contact from "../pages/ContactPage";
import Logo from "../layouts/LayoutConnexion";
import Login from "../pages/LoginPage";
import SignUp from "../pages/SignUpPage";
import VonderAcount from "../pages/VonderAcountPage";
import DetailsProductsPage from "../pages/DetailsProductsPage";
import LayoutConnexion from "../layouts/LayoutConnexion";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import Paiement from "../pages/PaiementPage";
import { redirect } from "react-router-dom";
const routes = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
        {
        path: "/profile",
        element: <Profile/>,
      
      },
      {
        path: "/saved",
        element: <Saved/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/addproduct",
        element: <AddProduct/>,
      },
      {
        path: "/selling",
        element: <Selling/>,
       
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/detailsProductsPage/:slug",
        element:<DetailsProductsPage/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/adminPage",
        element:<AdminPage/>,
      },
    ],
  },
  {
    element:<LayoutConnexion/>,
    children:[
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element:<SignUp/>,
      },
      
      {
        path: "/vonderAcount",
        element: <VonderAcount/>,
      },
      {
        path: "*",
        element: <NotFoundPage/>,
      },
      {
        path: "/paiement",
        element: <Paiement/>,
      },
    ]
  }
]);
export default routes;
