import star from "../../assets/carePoint/fi-sr-star.png";
import pro1 from "../../assets/carePoint/Ellipse 2.png";
import pro2 from "../../assets/carePoint/Ellipse 3.png";
import pro3 from "../../assets/carePoint/Ellipse 4.png";
import pro4 from "../../assets/carePoint/Ellipse 5.png";
import pi from "../../assets/carePoint/Pi.png";
import badge from "../../assets/carePoint/badge.png";
import coin from "../../assets/carePoint/coin.png";
import video from "../../assets/carePoint/video.png";

const CarePatient = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-[#020043] grid grid-cols-1 gap-4 md:grid-cols-5 lg:grid-cols-5">
        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-2 md:col-span-1 hidden md:block">
          <p className="text-[30px] md:text-[40px] font-semibold">90%</p>
          <p className="text-sm">Patient satisfaction rate, reflecting our commitment.</p>
          <img className="mt-10" src={pi} alt="" />
        </div>
        <h1 className="text-[#020043] text-5xl font-semibold text-center md:col-span-3">
          Comprehensive Care <br /> for Every Patient
        </h1>
        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-2 md:col-span-1 flex md:hidden">
          <div>
            <p className="text-[40px] font-semibold">90%</p>
            <p className="text-sm">Patient satisfaction rate, reflecting our commitment.</p>
          </div>
          <img className="mt-10" src={pi} alt="" />
        </div>

        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-2 md:col-span-1 flex md:flex-col justify-between">
          <div>
            <p className="text-[40px] font-semibold">50+</p>
            <p className="text-sm">Free lession video for patient</p>
          </div>
          <img className="w-32 mt-10" src={video} alt="" />
        </div>

        <div className="p-5 bg-[#fffff5] border border-[#02004333] rounded-3xl md:row-span-1 md:col-span-1 flex md:flex-col justify-between">
          <div>
            <p className="text-[40px] font-semibold">500+</p>
            <p className="text-sm">Board-certified doctors</p>
          </div>
          <img className="w-24" src={badge} alt="" />
        </div>

        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-1 md:col-span-1 flex md:flex-col gap-20 md:gap-0">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-[40px] font-semibold">4.8</p>
              <div>
                <img src={star} alt="" />
              </div>
            </div>
            <p className="text-sm">Over 20,000 Patient</p>
          </div>
          <div className="flex mt-3">
            <img className="w-10" src={pro1} alt="" />
            <img className="-ml-3 w-10" src={pro2} alt="" />
            <img className="-ml-3 w-10" src={pro3} alt="" />
            <img className="-ml-3 w-10" src={pro4} alt="" />
          </div>
        </div>

        <div className="p-5 bg-[#fffff5] border border-[#02004333] rounded-3xl flex md:flex-col gap-20 md:gap-0">
          <div>
            <p className="text-[40px] font-semibold">$5000</p>
            <p className="text-sm">Money spend for poor patient</p>
          </div>
          <img className="w-24 flex items-end" src={coin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CarePatient;
