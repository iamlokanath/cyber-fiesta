import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Event from './components/Event';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event/>}/>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
