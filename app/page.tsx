import Footer from "./components/Footer";
import About from "./components/landing/About";
import AboutNew from "./components/landing/AboutNew";
import Hero from "./components/landing/Hero";
import HeroNew from "./components/landing/HeroNew";
import SlidingFooter from "./components/Marquee";

const LandingPage: React.FC = () => {
    return (
        <>
            {/* <Hero /> */}
            <HeroNew />
            {/* <About /> */}
            <AboutNew />
            <Footer />
            <SlidingFooter />
        </>
    );
}

export default LandingPage;