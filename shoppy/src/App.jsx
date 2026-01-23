import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Navigation from './pages/Navigation';
import Banner from './pages/Banner';
import Grid from './pages/Grid';
import Footer from './pages/Footer';
import Explore from './pages/Explore';

const Home = () => (
  <>
    <Navigation />
    <Banner />
    <Grid />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;