import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Profile from "./NestedPage.jsx/Profile";
import Info from "./pages/info";
import Contact from "./NestedPage.jsx/Contact";
import Products from "./NestedPage.jsx/Products";
import Carts from "./NestedPage.jsx/Carts";
import Moreinfo from "./NestedPage.jsx/Moreinfo";

function App() {
  let location = useLocation();
  let notVisible = false;
  // console.log(notVisible, "<==");

  notVisible = [
    "/login",
    "/register",
    "/*",
    "/info/products",
    "/info/carts",
  ].includes(location.pathname);
  // console.log(notVisible, location.pathname, "<==");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/*" element={<NotFound />} />
          <Route path="/moreinfo" element={<Moreinfo />} />
        <Route path="/info" element={<Info />}>
          <Route index element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />{" "}
          <Route path="carts" element={<Carts />} />{" "}
        </Route>
      </Routes>
      {!notVisible && <Footer />}
    </>
  );
}

export default App;
 