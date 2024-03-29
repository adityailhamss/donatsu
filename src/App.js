
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import LandingPage from './component/LandingPage';
import Kemitraan from './component/Kemitraan';
import Karir from './component/Karir';
import TentangKami from './component/TentangKami';
import Produk from './component/Produk';




function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
        <Route path = "/" element ={<LandingPage/>}/>
        <Route path = "/kemitraan" element ={<Kemitraan/>}/>
        <Route path = "/karir" element ={<Karir/>}/>
        <Route path = "/tentangkami" element ={<TentangKami/>}/>
        <Route path = "/produk" element ={<Produk/>}/>
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
