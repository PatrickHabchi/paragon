import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Contact } from "./components/Pages/Contact";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;