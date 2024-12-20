//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Copyright from "./components/Copyright";
import LandingPage from "./pages/LandingPage";
import ScrollToSection from "./components/ScrollToSection";
import NavLinks from "./components/navLinks";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
    <div className="App bg-[rgb(26,27,37)] w-full">
    <div className="bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')] bg-repeat">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/projects/:id" element={<LandingPage/>}/>
        </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
