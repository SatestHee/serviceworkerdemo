

import './App.css';
import {  Link } from "@reach/router"

function About() {
  return (
    <div className="About">
      <h4>About Page</h4>
      <nav className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </nav>
      <p>Offline Shown Page</p>
    </div>
  );
}

export default About;
