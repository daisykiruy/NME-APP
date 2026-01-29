import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Scroll from "./components/scroll";
import logo from "/logo.jpg";

// Import pages
import Home from "./pages/home";
import About from "./pages/about";
import Resources from "./pages/resource";
import Services from "./pages/services";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";

function App() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Facebook", path: "#" },
        { name: "Twitter", path: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "#" },
        { name: "Terms & Conditions", path: "#" },
      ],
    },
  ];

  return (
    <>
      {/* 👇 SCROLL RESET (VERY IMPORTANT) */}
      <Scroll />

      {/* Navbar */}
      <Navbar
        logo={logo}
        links={navLinks}
        ctaText="Get Started"
        ctaLink="/pricing"
      />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer sections={footerSections} />
    </>
  );
}

export default App;
