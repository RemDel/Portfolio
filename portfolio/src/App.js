import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}> </Route>
    </Routes>
    </>
  );
}

export default App;
