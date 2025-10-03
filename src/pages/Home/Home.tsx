import { HeroSection, Service, FeedbackCarousel } from "./components";

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
        </div>
    );
}

export default Home;