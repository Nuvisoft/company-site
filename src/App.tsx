import { Container } from "@mui/material";
import AppToolbar from "./components/AppToolbar";
import Hero from "@components/Hero";
import Services from "@components/Services";
import WhyChooseUs from "@components/WhyChooseUs";
import About from "@components/About";
import Testimonials from "@components/Testimonials";
import Footer from "@components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";
import Aurora from "./components/Aurora";

function App() {
  return (
    <div>
      <BackgroundEffect
        effect={
          <Aurora
            colorStops={["#3B29FF", "#00C2FF", "#10B981", "#0B1021"]}
            blend={0.5}
            amplitude={1}
            speed={1}
          />
        }
      >
        <AppToolbar />
        <Hero />
      </BackgroundEffect>

      <Container component={"main"} sx={{ py: { xs: 6, md: 10 } }}>
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
