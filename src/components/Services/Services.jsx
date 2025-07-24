import { LuArrowUpRight } from "react-icons/lu";
import img from "../../assets/images/Rectangle 27-2.png"
import img1 from "../../assets/images/Rectangle 27-1.png"
import img2 from "../../assets/images/Rectangle 27.png"

const Services = () => {
    return (
        <div className="mt-20 md:mt-40 text-[#020043] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#fffff5] p-8">
            <div className="mt-16 md:mt-0 flex-1">
                <p className=" border border-[#343268] px-5 py-2 rounded-3xl w-fit">Service</p>
                <p className="text-4xl md:text-6xl font-semibold mt-3">Empowering Health,<br /> Enriching Lives</p>
                <p className="text-[#4d4c7b] mt-5 w-full md:w-[475px]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>

                <button className="text-[#020043] font-medium  rounded-xl px-4 py-2 flex items-center gap-1 mt-8 bg-[#ffc637]">Appointment <span className="text-xl"><LuArrowUpRight /></span> </button>
            </div>

            <div className="relative flex-1">
                <img className="rounded-3xl w-full" src={img} alt="" />
                <div className="bg-[#343268] max-w-96 rounded-3xl p-6 absolute left-0 md:left-6 bottom-0 md:bottom-6 bg-opacity-70">
                    <p className="text-[26px] font-medium text-white">Advanced Technology</p>
                    <div className="relative">
                    <p className="text-[#ffffffcc] mt-4">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    <span className="text-xl absolute -right-3 bottom-1 bg-[#ffc637] p-2 rounded-full text-white"><LuArrowUpRight /></span>
                    </div>
                </div>
            </div>

            <div className="relative flex-1">
                <img className="rounded-3xl w-full" src={img1} alt="" />
                <div className="bg-[#343268] max-w-96 rounded-3xl p-6 absolute left-0 md:left-6 bottom-0 md:bottom-6 bg-opacity-70">
                    <p className="text-[26px] font-medium text-white">Online Doctor Meet</p>
                    <div className="relative">
                    <p className="text-[#ffffffcc] mt-4">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    <span className="text-xl absolute -right-3 bottom-1 bg-[#ffc637] p-2 rounded-full text-white"><LuArrowUpRight /></span>
                    </div>
                </div>
            </div>

            <div className="relative flex-1">
                <img className="rounded-3xl w-full" src={img2} alt="" />
                <div className="bg-[#343268] max-w-96 rounded-3xl p-6 absolute left-0 md:left-6 bottom-0 md:bottom-6 bg-opacity-70">
                    <p className="text-[26px] font-medium text-white">Consultancy your health</p>
                    <div className="relative">
                    <p className="text-[#ffffffcc] mt-4">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    <span className="text-xl absolute -right-3 bottom-1 bg-[#ffc637] p-2 rounded-full text-white"><LuArrowUpRight /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;