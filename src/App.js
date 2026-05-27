import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Layout />

    <Routes>
      <Route path="Portfolio/home" element={<Home />}> </Route>
      <Route path="Portfolio/about" element={<About />}> </Route>
      <Route path="Portfolio/contact" element={<Contact />}> </Route>
    </Routes>
    </>
  );
}

export default App;