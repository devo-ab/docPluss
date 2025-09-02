import { LuArrowUpRight } from "react-icons/lu";
import img from "../../assets/images/Rectangle 24.png"

const Solution = () => {
    return (
        <div className="mt-20 md:mt-20 text-[#020043] flex flex-col-reverse md:flex-row">
            <div className="mt-40 md:mt-0 flex-1">
                <p className=" border border-[#343268] px-5 py-2 rounded-3xl w-fit">Who we are</p>
                <p className="text-4xl font-semibold mt-2">We Help To Get <br /> Soultions</p>
                <p className="text-[#4d4c7b] mt-3 w-full md:w-[475px]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>

                <button className="text-[#020043] font-medium  rounded-xl px-4 py-2 flex items-center gap-1 mt-4 bg-[#ffc637]">Learn more <span className="text-xl"><LuArrowUpRight /></span> </button>
            </div>

            <div className="relative flex-1">
                <img src={img} alt="" />
                <div className="bg-[#343268] max-w-96 rounded-3xl p-6 absolute -left-4 md:-left-24 top-3/4">
                    <p className="text-[26px] font-medium text-white">Our mission is simple</p>
                    <p className="text-[#ffffffcc] mt-4">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default Solution;