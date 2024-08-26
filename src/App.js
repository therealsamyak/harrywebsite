import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router, Routes, and Route
import './App.css';
import Navbar from './components/Navbar';
import ArtGallery from './components/ArtGallery';
import Films from './components/Films';
import Me from './components/Me';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar stays on top for all routes */}
        
        <main>
          <Routes>
            <Route path="/" element={<ArtGallery />} /> {/* Default route */}
            <Route path="/films" element={<Films />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </main>

        <footer className="footer">
          {/* Footer content if needed */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
