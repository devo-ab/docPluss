import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Layouts = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
