import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('');
    navigate(`/videos/${search}`);
  };
  return (
    <>
      <Link to="/">Home</Link> <Link to="/videos">Videos</Link>{' '}
      <Link to="/videos/watch">VideoDetail</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleInput}
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </>
  );
}
