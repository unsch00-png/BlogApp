import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: 'var(--color-primary)',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to="/" style={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>
        📝 BlogApp
      </Link>
      <Link
        to="/create"
        style={{
          color: '#fff',
          backgroundColor: 'var(--color-accent)',
          padding: '8px 16px',
          borderRadius: 'var(--radius-md)',
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        + New Post
      </Link>
    </nav>
  );
}