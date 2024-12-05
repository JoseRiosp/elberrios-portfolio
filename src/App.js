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
    <div className="App bg-gray-500 flex flex-col items-center">
      <header className="App-header 
      fixed h-10 rounded-lg flex w-1/4 
      items-center text-white bg-black 
      justify-center border border-gray-400 border-1'">
        <NavLinks/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/projects/:id" element={<LandingPage/>}/>
        </Routes>
      </main>
      <footer className="text-white flex flex-row items-center justify-center">
        <Copyright/>
      </footer>
    </div>
    </Router>
  );
}

export default App;
