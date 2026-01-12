import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import OurWirkingProcess from "./components/OurWirkingProcess";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ContactUS from "./components/ContactUs";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="text-color-text">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <OurWirkingProcess />
      <Team />
      <Testimonials />
      <ContactUS />
      <Footer />
    </div>
  )
}

export default App
