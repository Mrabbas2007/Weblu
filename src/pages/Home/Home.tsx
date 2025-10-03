import { HeroSection, Service, FeedbackCarousel, Portfolio, WhyUs } from "./components";

const Home = () => {

    return (
        <div className="w-full ">
            <div className="bg-gray-100 ">
                <HeroSection />
            </div>
            <div>
                <Service />
            </div>
            <div>
                <FeedbackCarousel />
            </div>
            <div>
                <Portfolio />
            </div>
            <div>
                <WhyUs />
            </div>
        </div>
    );
}

export default Home;