import Footer from "./components/Footer";
import About from "./components/landing/About";
import Hero from "./components/landing/Hero";
import SlidingFooter from "./components/SlidingFooter";

const LandingPage: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Footer />
            <SlidingFooter />
        </>
    );
}

export default LandingPage;