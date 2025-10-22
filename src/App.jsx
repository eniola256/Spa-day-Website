import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import Packages from "./Packages.jsx";
import Booking from "./Booking.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/book" element={<Booking/>}/>
      </Routes>
    </Router>
  );
}

export default App;
