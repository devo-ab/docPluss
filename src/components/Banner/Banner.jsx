import banner from "../../assets/images/Rectangle 5.png"

const Banner = () => {
    return (
        <div className="mt-10 relative overflow-hidden">
            <img className="w-full h-auto" src={banner} alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02004377] to-[#00c19d00] rounded-2xl lg:rounded-[52px]"></div>
        </div>
    );
};

export default Banner;