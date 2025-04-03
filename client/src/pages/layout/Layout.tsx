import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./layout.css";

const Layout = () => {
  const [isTerminalActive, setTerminalActive] = useState(false);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === "/");
  console.log(isTerminalActive, "hello");
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]); // Runs whenever the route changes

  return (
    <div className="layout">
      <div className="nav-bar">
        <Navbar />
      </div>

      <div className="content" style={isHomePage ? { paddingRight: 24 } : {}}>
        <Outlet context={{ isTerminalActive }} />
      </div>

      <div className="footer">
        <Footer setTerminalActive={setTerminalActive} />
      </div>
    </div>
  );
};

export default Layout;
