import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Navigation from './pages/Navigation';
import Banner from './pages/Banner';
import Grid from './pages/Grid';
import Footer from './pages/Footer';
import Explore from './pages/Explore';
import UserProfile from './pages/Userprofile';
import Adminlogin from './pages/Adminlogin';
import Productview from './pages/Productview';

const Home = () => (
  <>
    <Navigation />
    <Banner />
    <Grid />
   
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/productview" element={<Productview />} />
      </Routes>
       <Footer />
    </Router>
  );
};

export default App;

