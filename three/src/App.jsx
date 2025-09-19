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

function App() {
  let location = useLocation();
  let notVisible = false;
  notVisible = ["/login", "/register", "/*"].includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />~
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {notVisible && <Footer />}
    </>
  );
}

export default App;
