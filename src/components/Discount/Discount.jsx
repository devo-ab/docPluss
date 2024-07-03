import img from "../../assets/images/Rectangle 32.png";
import logo from "../../assets/logo/logo light.png";
import { LuArrowUpRight } from "react-icons/lu";

const Discount = () => {
  return (
    <div className="mt-10 relative overflow-hidden">
      <img className="w-full h-fit rounded-3xl" src={img} alt="" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020043] to-[#0200434d] rounded-3xl"></div>

      <div className="absolute top-4 md:top-16 right-4 md:right-16">
        <img className="w-20" src={logo} alt="" />
      </div>

      <div className="absolute top-2 md:top-1/4 p-4 md:p-12">
        <p className="text-2xl md:text-5xl font-semibold text-white">Get Your</p>
        <p className="text-2xl md:text-5xl font-semibold text-white md:mt-3">First Appointment</p>
        <p className="text-2xl md:text-5xl font-semibold text-white md:mt-3">at 50% Off!</p>
        <div className="flex gap-5 mt-2 md:mt-6">
          <button className="text-[#020043] font-medium bg-[#ffc637] rounded-xl px-6 py-2 flex items-center gap-1">
            Appointment
            <span className="text-xl">
              <LuArrowUpRight />
            </span>
          </button>
          <button className="text-white font-medium  rounded-xl px-6 py-2 flex items-center gap-1 border border-[#fffff5]">
            Learn more
            <span className="text-xl">
              <LuArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
