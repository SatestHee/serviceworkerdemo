import './App.css';
import {  Link } from "@reach/router"

function Home() {
  return (
    <div>
    <h4>Product Page</h4>
    <nav className="menu">
    <ul>
      
    <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
    </ul>
  </nav> 
      <p>
        This is home page
      </p>
    </div>
  );
}

export default Home;

