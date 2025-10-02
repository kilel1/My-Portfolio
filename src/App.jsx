import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contactform";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-pink-700 text-white p-4 shadow-md">
  <ul className="flex space-x-6 justify-center">
    <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
    <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
    <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
  </ul>
</nav>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}




