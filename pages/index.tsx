import type { NextPage } from "next";
import Navbar from "../src/components/Layout/Navbar";
import Hero from "../src/components/Hero";
import AboutUs from "../src/components/AboutUs";
import Services from "../src/components/Services";
import Mission from "../src/components/Mission";
import Alliances from "../src/components/Alliances";
import Stats from "../src/components/Stats";
import Footer from "../src/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:h-screen">
        <Navbar />
        <div className="flex-1">
          <Hero />
        </div>

      </div>
      <AboutUs />
      <Alliances />
      <Services />
      <Mission />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
