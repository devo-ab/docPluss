import Banner from "../../components/Banner/Banner";
import CarePatient from "../../components/CarePatient/CarePatient";
import Discount from "../../components/Discount/Discount";
import Faq from "../../components/Faq/Faq";
import Services from "../../components/Services/Services";
import Solution from "../../components/Solution/Solution";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <CarePatient></CarePatient>
            <Solution></Solution>
            <Services></Services>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Discount></Discount>
        </div>
    );
};

export default Home;