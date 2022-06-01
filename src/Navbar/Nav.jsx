import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div style={{gap:"2rem"}}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Nav;
