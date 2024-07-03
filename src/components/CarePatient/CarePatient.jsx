import star from "../../assets/carePoint/fi-sr-star.png";
import pro1 from "../../assets/carePoint/Ellipse 2.png";
import pro2 from "../../assets/carePoint/Ellipse 3.png";
import pro3 from "../../assets/carePoint/Ellipse 4.png";
import pro4 from "../../assets/carePoint/Ellipse 5.png";

const CarePatient = () => {
  return (
    <div className="mt-5">
      <div className="text-[#020043] grid grid-cols-1 gap-4 md:grid-cols-5 lg:grid-cols-5">
        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-2 md:col-span-1 hidden md:block">
          <p className="text-[40px] font-semibold">90%</p>
          <p className="text-sm">Patient satisfaction rate, reflecting our commitment.</p>
        </div>
        <h1 className="text-[#020043] text-5xl font-semibold text-center md:col-span-3">
          Comprehensive Care <br /> for Every Patient
        </h1>
        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-2 md:col-span-1 block md:hidden">
          <p className="text-[40px] font-semibold">90%</p>
          <p className="text-sm">Patient satisfaction rate, reflecting our commitment.</p>
        </div>

        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-2 md:col-span-1">
          <p className="text-[40px] font-semibold">50+</p>
          <p className="text-sm">Free lession video for patient</p>
        </div>

        <div className="p-5 bg-[#fffff5] border border-[#02004333] rounded-3xl md:row-span-1 md:col-span-1">
          <p className="text-[40px] font-semibold">500+</p>
          <p className="text-sm">Board-certified doctors</p>
        </div>


        <div className="p-5 bg-[#fbfbfb] border border-[#02004333] rounded-3xl md:row-span-1 md:col-span-1">
          <div className="flex items-center gap-2">
            <p className="text-[40px] font-semibold">4.8</p>
            <div>
              <img src={star} alt="" />
            </div>
          </div>
          <p className="text-sm">Over 20,000 Patient</p>
          <div className="flex mt-3">
            <img src={pro1} alt="" />
            <img className="-ml-3" src={pro2} alt="" />
            <img className="-ml-3" src={pro3} alt="" />
            <img className="-ml-3" src={pro4} alt="" />
          </div>
        </div>

        <div className="p-5 bg-[#fffff5] border border-[#02004333] rounded-3xl">
          <p className="text-[40px] font-semibold">$5000</p>
          <p className="text-sm">Money spend for poor patient</p>
        </div>
      </div>
    </div>
  );
};

export default CarePatient;
