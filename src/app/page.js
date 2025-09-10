import AboutUs from "@/components/aboutUs/aboutUs";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import InfoBar from "@/components/InfoBar/InfoBar";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import ServiceSection from "@/components/serviceSection/serviceSection";
import Slider from "@/components/Slider/Slider";
import Team from "@/components/Team/Team";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <ServiceSection />
      <InfoBar />
      <PopularProducts />
      <Team />
      <ChooseUs />
      <Testimonial />
    </>
  );
}
