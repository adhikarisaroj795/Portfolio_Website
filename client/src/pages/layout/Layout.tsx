import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./layout.css";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <div className="nav-bar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
