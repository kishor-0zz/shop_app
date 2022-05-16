import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Header/Footer/Footer';
import Home from './Component/Header/Home/Home';
import About from './Component/Header/About/About';
import Service from './Component/Header/Service/Service';
import Contact from './Component/Header/Contact/Contact';
import Faq from './Component/Header/Faq/Faq';
import PageNotFound from './Component/Header/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
