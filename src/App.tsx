import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Live from './pages/Live';
import OurMission from './pages/OurMission';
import Leadership from './pages/Leadership';
import StatementOfFaith from './pages/StatementOfFaith';
import Sermons from './pages/Sermons';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';
import Volunteers from './pages/Volunteers';
import ParkYouth from './pages/ParkYouth';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/mission" element={<OurMission />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/faith" element={<StatementOfFaith />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/youth" element={<ParkYouth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
