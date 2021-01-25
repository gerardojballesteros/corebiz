import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Products from './components/Products/ProductContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
