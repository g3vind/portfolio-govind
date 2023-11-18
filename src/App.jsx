import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Projects from "./pages/Projects";
import Skills from "./components/Skills";
import Certificates from "./pages/Certificates";
import { ErrorPage } from "./pages/ErrorPage";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
