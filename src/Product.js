import './App.css';
import {  Link } from "@reach/router"

function Product() {
  return (
    <div>
    <h4>Product Page</h4>
    <nav className="menu">
    <ul> <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
    </ul>
  </nav> 
      <p>
        This is product page cannot shown while offline.
      </p>
    </div>
  );
}

export default Product;
