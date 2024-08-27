import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ArtGallery from './components/ArtGallery';
import Films from './components/Films';
import Me from './components/Me';
import Footer from './components/Footer'; // Import the Footer component

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

        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
}

export default App;
