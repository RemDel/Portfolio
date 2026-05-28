import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import QuanticDream from './components/Project/QuanticDream';
import AviationCivile from './components/Project/AviationCivile';
import SafranAircraftEngine from './components/Project/SafranAircraftEngine';


function App() {
  return (
    <>
    <Layout />

    <Routes>
      <Route path="/Portfolio" element={<Home />}> </Route>
      <Route path="/about" element={<About />}> </Route>
      <Route path="/contact" element={<Contact />}> </Route>

      <Route path="/project" element={<Home />}> </Route>
      <Route path="/project/quanticdream" element={<QuanticDream />}> </Route>
      <Route path="/project/aviationcivile" element={<AviationCivile />}> </Route>
      <Route path="/project/safranaircraftengine" element={<SafranAircraftEngine />}> </Route>
    </Routes>
    </>
  );
}

export default App;