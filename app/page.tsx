import Image from "next/image";
import Navbar from "./Components/Header";
import HeroSection from "./Components/hero";
import AboutSection from "./Components/about";
import ContactSection from "./Components/contact";
import ServicesSection from "./Components/services";
import Footer from "./Components/footer";
import ProjectsSection from "./Components/project";
import BlogPage from "./Components/blog";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <BlogPage/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
