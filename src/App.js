import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import QuanticDream from './components/Project/QuanticDream';
import Personal from './components/Project/Personal';

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
      <Route path="/project/personalprojects" element={<Personal />}> </Route>
      <Route path="/project/quanticdream" element={<QuanticDream />}> </Route>
    </Routes>
    </>
  );
}

export default App;