import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
