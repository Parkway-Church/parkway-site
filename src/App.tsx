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
import LifeGroups from './pages/LifeGroups';
import ParkYouth from './pages/ParkYouth';
import JourneyLand from './pages/JourneyLand';
import JourneyKids from './pages/JourneyKids';
import Events from './pages/Events';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans">
      <ScrollToTop />
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
        <Route path="/groups" element={<LifeGroups />} />
        <Route path="/youth" element={<ParkYouth />} />
        <Route path="/kids" element={<JourneyKids />} />
        <Route path="/journeyland" element={<JourneyLand />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
