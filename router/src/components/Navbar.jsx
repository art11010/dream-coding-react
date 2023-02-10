import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/videos">Video</Link>
      <Link to="/not">안녕</Link>
    </nav>
  );
}