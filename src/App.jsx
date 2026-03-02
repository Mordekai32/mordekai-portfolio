import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ExploreGrid from './pages/ExploreGrid';
import Contact from './pages/Contact';
import HireMe from './pages/HireMe';
import ResumePage from './pages/ResumePage'; // <-- Import the Resume page

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/explore-grid" element={<ExploreGrid />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/resume" element={<ResumePage />} /> {/* Active route */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
