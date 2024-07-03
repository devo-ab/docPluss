import logo from "../../../assets/logo/logo light.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer bg-[#020043] text-base-content px-4 md:px-32 py-6 md:py-16">
        <aside className="text-[#FFFFF5]">
          <img src={logo} alt="" />
          <p className="mt-4">
            123 Main Street Anytown,USA <br /> Postal Code: 12345
          </p>
          <p className="mt-4">Support: support@oyolloo.com <br /> (Available :
            10:00am to 07:00pm)</p>
        </aside>
        <nav className="align-baseline items-baseline text-[#FFFFF5] text-sm md:mt-12">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and Condition</a>
        </nav>
        <nav className="align-baseline items-baseline text-[#FFFFF5] text-sm md:mt-12">
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav>
          <a className="align-baseline items-baseline text-[#FFFFF5] text-sm md:mt-12">Follow us</a>
          <div className="text-[#FFFFF5] flex gap-5 text-xl">
            <p><FaFacebook /></p>
            <p><FaInstagram /></p>
            <p className="rounded-full"><FaLinkedin /></p>
            <p><FaYoutube /></p>
          </div>
           <p className="text-[#FFFFF5] text-sm mt-6">@docplus 2024</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
