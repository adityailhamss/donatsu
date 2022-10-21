import logo from './logo.svg';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import LandingPage from './component/LandingPage';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element ={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
