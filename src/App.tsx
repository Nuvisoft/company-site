import { Box, Container } from "@mui/material";
import AppToolbar from "./components/AppToolbar";
import Hero from "@components/Hero";
import Services from "@components/Services";
import WhyChooseUs from "@components/WhyChooseUs";
import About from "@components/About";
import Testimonials from "@components/Testimonials";
import Footer from "@components/Footer";

function App() {
  return (
    <div>
      <AppToolbar />

      <Box component="main">
        <Hero />
        <Container sx={{ py: { xs: 6, md: 10 } }}>
          <Services />
          <WhyChooseUs />
          <About />
          <Testimonials />
        </Container>
      </Box>

      <Footer />
    </div>
  );
}

export default App;
