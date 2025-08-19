import AboutUs from "@/components/aboutUs/aboutUs";
import InfoBar from "@/components/InfoBar/InfoBar";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/serviceSection/serviceSection";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <ServiceSection />
      <InfoBar />
    </>
  );
}
