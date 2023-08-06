import Header from "./modules/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Login from "./pages/Login/Login";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import Footer from "./modules/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        <ScrollUpButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
