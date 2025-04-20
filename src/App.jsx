import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCards from "./sections/FeatureCards"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}

export default App