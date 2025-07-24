import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Layouts = () => {
  return (
    <div className="font-inter">
      <div className="max-w-7xl mx-auto px-4 lg:px-4">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
