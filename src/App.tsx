import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import DiaryPost from './pages/DiaryPost';
import Letters from './pages/Letters';
import BlogPost from './pages/BlogPost';
import Gallery from './pages/Gallery';
import Newsletter from './pages/Newsletter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8F4EF] text-[#2B2B2B]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/journey/:id" element={<DiaryPost />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/letters/:id" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;