import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AITools from './pages/AITools';
import AIEducation from './pages/AIEducation';
import AIEvents from './pages/AIEvents';
import Magazine from './pages/Magazine';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/ai-education" element={<AIEducation />} />
          <Route path="/ai-events" element={<AIEvents />} />
          <Route path="/magazine" element={<Magazine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;