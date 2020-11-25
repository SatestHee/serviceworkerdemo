import './App.css';
import  Home  from './Home';
import  About  from './About';
import Product from './Product';
import React from 'react';
import {Router} from '@reach/router';
import {Workbox} from 'workbox-window';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Product path="/product" />
      </Router>
    </React.Fragment>
  );
}

if ('serviceWorker' in navigator) {
  const wb = new Workbox('./service-worker.js');
  wb.register();
}

export default App;
