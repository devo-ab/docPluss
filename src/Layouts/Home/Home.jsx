import Banner from "../../components/Banner/Banner";
import CarePatient from "../../components/CarePatient/CarePatient";
import Faq from "../../components/Faq/Faq";
import Services from "../../components/Services/Services";
import Solution from "../../components/Solution/Solution";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <CarePatient></CarePatient>
            <Solution></Solution>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;